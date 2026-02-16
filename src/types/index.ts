// Data structure types
export interface Program {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface Course {
  id: number;
  category: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

export interface Mentor {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  keahlian: string[];
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
  };
}

export interface Testimonial {
  name: string;
  handle: string;
  image?: string;
  testimonial: string;
  likes: number;
  timestamp: string;
  socials: {
    github: string;
    instagram: string;
    linkedin: string;
  };
}

// Chat types
export type MessageSender = "user" | "ai";
export type FeedbackType = "positive" | "negative" | null;

export interface Message {
  sender: MessageSender;
  text: string;
  feedback: FeedbackType;
}

export interface Conversation {
  id: number;
  title: string;
  messages: Message[];
}

export interface GroupedConversations {
  [key: string]: Conversation[];
}

// Component prop types
export interface ButtonProps {
  variant?: "primary" | "secondary";
  as?: "button" | "Link" | "a";
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface AnimatedCounterProps {
  value: number;
}

export interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

export interface Feature {
  title: string;
  description: string;
}
