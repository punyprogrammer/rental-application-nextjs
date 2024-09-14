"use client";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  pendingText?: string;
};
export function SubmitButton({
  className = "",
  text = "submit",
  pendingText = "Pending...",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
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
