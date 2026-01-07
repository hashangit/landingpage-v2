"use client";

import { useEffect } from "react";

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
    if (!isOpen) {
      return;
    }

    // Save the original overflow value to restore it later
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      // Restore the original overflow value
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);
}
