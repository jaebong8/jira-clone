import ResponsiveModal from "@/components/responsive-modal";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

const useConfirm = (
  title: string,
  message: string,
  variant: ButtonProps["variant"] = "primary"
): [() => JSX.Element, () => Promise<unknown>] => {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);
  const confirm = () => {
    return new Promise((resolve) => {
      setPromise({ resolve });
    });
  };

  const handleClose = () => {
    setPromise(null);
  };

  const handleComfirm = () => {
    promise?.resolve(true);
    handleClose();
  };
  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmationDialog = () => {
    return (
      <ResponsiveModal open={promise !== null} onOpenChange={handleClose}>
        <Card className="w-full h-full border-none shadow-none">
          <CardContent className="pt-8">
            <CardTitle className="p-0">{title}</CardTitle>
            <CardDescription>{message}</CardDescription>
            <div className="pt-4 w-full flex flex-col gap-y-2 lg:flex-row gap-x-2 items-center justify-end">
              <Button
                onClick={handleCancel}
                variant="outline"
                className="w-full lg:w-auto"
              >
                Cancel
              </Button>
              <Button
                onClick={handleComfirm}
                variant={variant}
                className="w-full lg:w-auto"
              >
                Confirm
              </Button>
            </div>
          </CardContent>
        </Card>
      </ResponsiveModal>
    );
  };

  return [ConfirmationDialog, confirm];
};

export default useConfirm;
