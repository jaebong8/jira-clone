import { useQueryState, parseAsBoolean, parseAsStringEnum } from "nuqs";
import { TaskStatus } from "../types";

export const useCreateTaskModal = () => {
  const [isOpen, setIsOpen] = useQueryState(
    "create-task",
    parseAsBoolean.withDefault(false).withOptions({
      clearOnDefault: true,
    })
  );

  const [initialStatus, setInitialStatus] = useQueryState(
    "initial-status",
    parseAsStringEnum<TaskStatus>(Object.values(TaskStatus)).withOptions({
      clearOnDefault: true,
    })
  );

  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    setInitialStatus(null);
  };

  return {
    isOpen,
    open,
    close,
    setIsOpen,
    initialStatus,
    setInitialStatus,
  };
};
