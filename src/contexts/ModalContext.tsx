"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface ModalContextValue {
  isCalModalOpen: boolean;
  openCalModal: () => void;
  closeCalModal: () => void;
  isPrivacyPolicyOpen: boolean;
  openPrivacyPolicy: () => void;
  closePrivacyPolicy: () => void;
  isTermsConditionsOpen: boolean;
  openTermsConditions: () => void;
  closeTermsConditions: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsConditionsOpen, setIsTermsConditionsOpen] = useState(false);

  const openCalModal = useCallback(() => setIsCalModalOpen(true), []);
  const closeCalModal = useCallback(() => setIsCalModalOpen(false), []);

  const openPrivacyPolicy = useCallback(() => setIsPrivacyPolicyOpen(true), []);
  const closePrivacyPolicy = useCallback(() => setIsPrivacyPolicyOpen(false), []);

  const openTermsConditions = useCallback(() => setIsTermsConditionsOpen(true), []);
  const closeTermsConditions = useCallback(() => setIsTermsConditionsOpen(false), []);

  return (
    <ModalContext.Provider
      value={{
        isCalModalOpen,
        openCalModal,
        closeCalModal,
        isPrivacyPolicyOpen,
        openPrivacyPolicy,
        closePrivacyPolicy,
        isTermsConditionsOpen,
        openTermsConditions,
        closeTermsConditions,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModals must be used within a ModalProvider");
  }
  return context;
}
