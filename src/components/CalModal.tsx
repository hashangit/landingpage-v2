"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useModalEffects } from "@/hooks/useModalEffects";

interface CalModalProps {
  isOpen: boolean;
  onClose: () => void;
  calLink: string;
  calDomain?: string;
}

export default function CalModal({ isOpen, onClose, calLink, calDomain }: CalModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pathname = usePathname();

  // Build the embed URL with the custom domain
  const domain = calDomain || "cal.com";
  // Cal.com needs ?embed=true to render properly in iframes
  const [embedUrl, setEmbedUrl] = useState("");

  // Set the full URL with redirect on client side only
  useEffect(() => {
    const currentUrl = window.location.origin + pathname;
    setEmbedUrl(
      `https://${domain}/${calLink}?embed=true&url=${encodeURIComponent(currentUrl)}`
    );
  }, [calLink, domain, pathname]);

  // Handle common modal effects (escape key, body scroll lock)
  useModalEffects(isOpen, onClose);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Cal.com Embed - Direct Iframe */}
        <iframe
          ref={iframeRef}
          src={embedUrl}
          className="w-full h-[600px] border-0 rounded-b-2xl"
          allow="camera; microphone; fullscreen; display-capture"
          title="Book a meeting"
        />
      </div>
    </div>
  );
}

// Deprecated hook - use useModals from ModalContext instead
export function useCalModal() {
  throw new Error(
    "useCalModal is deprecated. Please use useModals from @/contexts/ModalContext instead."
  );
}
