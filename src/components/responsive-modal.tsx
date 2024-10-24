import React, { ReactNode } from "react";
import { useMedia } from "react-use";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "./ui/drawer";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

type Props = {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ResponsiveModal = ({ children, open, onOpenChange }: Props) => {
  const isDesktop = useMedia("(min-width: 1024px)", true);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <VisuallyHidden.Root>
          <DialogTitle> ResponsiveModal</DialogTitle>
          <DialogDescription>ResponsiveModal</DialogDescription>
        </VisuallyHidden.Root>
        <DialogContent className="w-full sm:max-w-lg p-0 border-none overflow-y-auto hide-scrollbar max-h-[85vh]">
          {children}
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <VisuallyHidden.Root>
        <DrawerTitle> ResponsiveModal</DrawerTitle>
        <DrawerDescription>ResponsiveModal</DrawerDescription>
      </VisuallyHidden.Root>
      <DrawerContent>
        <div className="w-full sm:max-w-lg p-0 border-none overflow-y-auto hide-scrollbar max-h-[85vh] mx-auto">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ResponsiveModal;
