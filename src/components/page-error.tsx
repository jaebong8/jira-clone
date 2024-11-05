"use client";

import { AlertTriangle } from "lucide-react";

type Props = {
  message: string;
};

const PageError = ({ message = "Something went wrong" }: Props) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <AlertTriangle className="size-6 text-muted-foreground" />
      <p className="text-sm text-muted-foreground font-medium">{message}</p>
    </div>
  );
};

export default PageError;
