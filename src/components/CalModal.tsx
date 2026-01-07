"use client";

import { useEffect, useRef, useState } from "react";

interface CalModalProps {
  calLink: string;
  calDomain?: string;
}

export interface CalModalRef {
  open: () => void;
  close: () => void;
}

export default function CalModal({ calLink, calDomain }: CalModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  // Build the embed URL with the custom domain
  const domain = calDomain || "cal.com";
  // Cal.com needs ?embed=true to render properly in iframes
  // Use empty string for SSR, will be updated on client
  const [embedUrl, setEmbedUrl] = useState(
    `https://${domain}/${calLink}?embed=true`
  );

  // Set the full URL with redirect on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      setEmbedUrl(
        `https://${domain}/${calLink}?embed=true&url=${encodeURIComponent(window.location.href)}`
      );
    }
  }, [calLink, domain]);

  // Expose methods via ref for external control
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        close();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  // Make open/close available globally for button clicks
  useEffect(() => {
    (window as unknown as { calModalOpen?: () => void }).calModalOpen = open;
    (window as unknown as { calModalClose?: () => void }).calModalClose = close;
  }, [open]);

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={close}
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
      )}
    </>
  );
}

// Hook for easy access to modal controls
export function useCalModal() {
  return {
    open: () => (window as unknown as { calModalOpen?: () => void }).calModalOpen?.(),
    close: () => (window as unknown as { calModalClose?: () => void }).calModalClose?.(),
  };
}
