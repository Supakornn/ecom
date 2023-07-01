"use client";

import { StoreModal } from "@/components/modals/stoe-modal";
import { useState, useEffect } from "react";

export const ModalProvier = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
