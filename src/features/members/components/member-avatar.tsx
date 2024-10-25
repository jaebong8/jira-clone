import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  name: string;
  className?: string;
  fallbackClassName?: string;
};
const MemberAvatar = ({ fallbackClassName, name, className }: Props) => {
  return (
    <Avatar
      className={cn(
        "size-10 transition border border-neutral-300 rounded-full",
        className
      )}
    >
      <AvatarFallback
        className={cn(
          "bg-neutral-200 font-medium text-neutral-500 flex-center",
          fallbackClassName
        )}
      >
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};

export default MemberAvatar;
