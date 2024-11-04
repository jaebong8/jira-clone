"use client";
import React from "react";
import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import ResponsiveModal from "@/components/responsive-modal";
import CreateTaskFormWrapper from "./create-task-form-wrapper";

const CreateTaskModal = () => {
  const { isOpen, setIsOpen, close, setInitialStatus, initialStatus } =
    useCreateTaskModal();
  const handleClose = (open: boolean) => {
    setIsOpen(open);
    if (!open) setInitialStatus(null);
  };
  return (
    <ResponsiveModal open={isOpen} onOpenChange={handleClose}>
      <CreateTaskFormWrapper onCancel={close} initialStatus={initialStatus} />
    </ResponsiveModal>
  );
};

export default CreateTaskModal;
