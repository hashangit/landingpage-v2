"use client";

import CalModal from "./CalModal";
import { useModals } from "@/contexts/ModalContext";

export default function CalModalWrapper() {
  const { isCalModalOpen, closeCalModal } = useModals();

  return (
    <CalModal
      isOpen={isCalModalOpen}
      onClose={closeCalModal}
      calLink={process.env.NEXT_PUBLIC_CAL_COM_LINK || "hasslefreecare/30min"}
      calDomain={process.env.NEXT_PUBLIC_CAL_DOMAIN}
    />
  );
}
