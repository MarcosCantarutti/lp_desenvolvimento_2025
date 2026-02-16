import { useState, useEffect, useMemo, useRef } from "react";
import {
  isToday,
  isYesterday,
  isWithinInterval,
  subDays,
  startOfMonth,
} from "date-fns";
import notificationSound from "../assets/song/notification.mp3";
import {
  Conversation,
  GroupedConversations,
  FeedbackType,
} from "../types";

// Helper function to group conversations by date
const groupConversationsByDate = (
  conversations: Conversation[],
): GroupedConversations => {
  const now = new Date();
  const groups: GroupedConversations = {
    "Hari Ini": [],
    Kemarin: [],
    "7 Hari Terakhir": [],
    "Bulan Ini": [],
    "Lebih Lama": [],
  };

  conversations.forEach((convo) => {
    const convoDate = new Date(convo.id);
    if (isToday(convoDate)) groups["Hari Ini"].push(convo);
    else if (isYesterday(convoDate)) groups["Kemarin"].push(convo);
    else if (
      isWithinInterval(convoDate, { start: subDays(now, 7), end: now })
    )
      groups["7 Hari Terakhir"].push(convo);
    else if (
      isWithinInterval(convoDate, { start: startOfMonth(now), end: now })
    )
      groups["Bulan Ini"].push(convo);
    else groups["Lebih Lama"].push(convo);
  });

  Object.keys(groups).forEach((key) => {
    if (groups[key].length === 0) delete groups[key];
  });

  return groups;
};

// Main custom hook
export const useChat = () => {
  const [conversations, setConversations] = useState<Conversation[]>(() => {
    const saved = localStorage.getItem("himtiConversations");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: Date.now(),
            title: "Percakapan Awal",
            messages: [
              {
                sender: "ai",
                text: "Halo! Saya HIMTIChat, asisten AI untuk membantumu belajar coding. Ada yang bisa saya bantu?",
                feedback: null,
              },
            ],
          },
        ];
  });

  const [activeConversationId, setActiveConversationId] = useState<number>(
    () => conversations[0]?.id || Date.now(),
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement>(new Audio(notificationSound));

  // Effect to sync with localStorage
  useEffect(() => {
    localStorage.setItem("himtiConversations", JSON.stringify(conversations));
  }, [conversations]);

  // Handler to start new conversation
  const handleNewConversation = (): void => {
    const newId = Date.now();
    const newConversation: Conversation = {
      id: newId,
      title: "Percakapan Baru",
      messages: [
        {
          sender: "ai",
          text: "Halo! Ada lagi yang bisa saya bantu?",
          feedback: null,
        },
      ],
    };
    setConversations((prev) => [newConversation, ...prev]);
    setActiveConversationId(newId);
  };

  // Handler to delete conversation
  const handleDeleteConversation = (idToDelete: number): void => {
    const remaining = conversations.filter((c) => c.id !== idToDelete);
    if (remaining.length === 0) {
      handleNewConversation();
    } else {
      setConversations(remaining);
      if (activeConversationId === idToDelete) {
        setActiveConversationId(remaining[0].id);
      }
    }
  };

  // Helper function to get API endpoint based on platform
  const getAPIEndpoint = (): string => {
    // Check if running on Vercel
    if (typeof window !== "undefined" && window.location.hostname.includes("vercel.app")) {
      return "/api/getAIResponse";
    }
    // Check for Vercel custom domain (you can add your domain here)
    // For now, default to Netlify for backward compatibility
    // You can also use environment variable to determine platform
    const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
    if (apiEndpoint) {
      return apiEndpoint;
    }
    // Default to Netlify
    return "/.netlify/functions/getAIResponse";
  };

  // Handler to send message (including API call)
  const handleSubmit = async (prompt: string): Promise<void> => {
    if (!prompt.trim()) return;
    const newUserMessage = { sender: "user" as const, text: prompt };

    setConversations((prev) =>
      prev.map((convo) => {
        if (convo.id === activeConversationId) {
          const newTitle =
            convo.messages.length === 1
              ? prompt.substring(0, 25) + "..."
              : convo.title;
          return {
            ...convo,
            title: newTitle,
            messages: [...convo.messages, newUserMessage],
          };
        }
        return convo;
      }),
    );
    setIsLoading(true);

    try {
      const apiEndpoint = getAPIEndpoint();
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok)
        throw new Error("Gagal mendapatkan respons dari server.");
      const data = await response.json();

      const cleanedText = data.response.replace(/<s>|<\/s>/g, "").trim();
      const aiMessage = {
        sender: "ai" as const,
        text: cleanedText,
        feedback: null,
      };

      setConversations((prev) =>
        prev.map((convo) =>
          convo.id === activeConversationId
            ? { ...convo, messages: [...convo.messages, aiMessage] }
            : convo,
        ),
      );

      if (isSoundEnabled) {
        audioRef.current
          .play()
          .catch((e) => console.error("Gagal memainkan suara:", e));
      }
    } catch (error) {
      console.error("Gagal menghubungi AI:", error);
      const errorMessage = {
        sender: "ai" as const,
        text: "Maaf, terjadi kesalahan. Coba lagi nanti.",
        feedback: null,
      };
      setConversations((prev) =>
        prev.map((convo) =>
          convo.id === activeConversationId
            ? { ...convo, messages: [...convo.messages, errorMessage] }
            : convo,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Handler for feedback
  const handleFeedback = (
    messageIndex: number,
    feedbackType: FeedbackType,
  ): void => {
    setConversations((prev) =>
      prev.map((convo) => {
        if (convo.id === activeConversationId) {
          const newMessages = [...convo.messages];
          if (newMessages[messageIndex].feedback === null)
            newMessages[messageIndex].feedback = feedbackType;
          return { ...convo, messages: newMessages };
        }
        return convo;
      }),
    );
  };

  // Memoized data for performance
  const activeConversation = useMemo(
    () => conversations.find((c) => c.id === activeConversationId),
    [conversations, activeConversationId],
  );

  const groupedAndFilteredConversations = useMemo(() => {
    const filtered = conversations.filter((convo) =>
      convo.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return groupConversationsByDate(filtered);
  }, [conversations, searchTerm]);

  return {
    isLoading,
    isSoundEnabled,
    conversations,
    activeConversation,
    groupedAndFilteredConversations,
    activeConversationId,
    searchTerm,
    setSearchTerm,
    handleNewConversation,
    handleDeleteConversation,
    handleSubmit,
    handleFeedback,
    handleSwitchConversation: setActiveConversationId,
    toggleSound: () => setIsSoundEnabled((prev) => !prev),
  };
};
