"use client";

import { useEffect, useCallback } from "react";

/**
 * Custom hook that handles common modal side effects:
 * - Escape key to close modal
 * - Body scroll lock when modal is open
 *
 * @param isOpen - Whether the modal is currently open
 * @param onClose - Callback function to close the modal
 */
export function useModalEffects(isOpen: boolean, onClose: () => void) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
}
