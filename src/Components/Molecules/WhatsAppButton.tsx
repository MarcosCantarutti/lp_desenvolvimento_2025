import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "5534999457198";
  const message =
    "Olá! Vim do site da LP Desenvolvimento e gostaria de saber mais sobre os serviços.";

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a LP Desenvolvimento no WhatsApp"
      className="fixed z-50 flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white rounded-full shadow-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 bottom-4 right-4 md:bottom-6 md:right-6 transition-transform duration-200 hover:-translate-y-1"
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
        <FaWhatsapp className="w-5 h-5" />
      </span>
      <span className="hidden sm:inline-block">Falar no WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
