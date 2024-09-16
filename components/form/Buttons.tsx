"use client";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type btnSize = "default" | "sm" | "icon" | "lg";
type SubmitButtonProps = {
  className?: string;
  text?: string;
  pendingText?: string;
  size?: btnSize;
};
export function SubmitButton({
  className = "",
  text = "submit",
  pendingText = "Pending...",
  size = "default",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      size={size}
      className={`capitalize ${className}`}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          {pendingText}
        </>
      ) : (
        text
      )}
    </Button>
  );
}
