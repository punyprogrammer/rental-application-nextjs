"use client";

import { useToast } from "@/hooks/use-toast";
import { NavLinkTexts } from "@/utils/constants";
import { SignOutButton } from "@clerk/nextjs";

const SignoutLink = () => {
  const { toast } = useToast();
  const handleSignout = () => {
    toast({
      description: "You have been signed out",
    });
  };
  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleSignout}>{NavLinkTexts.LOGOUT}</button>
    </SignOutButton>
  );
};

export default SignoutLink;
