// A generic helper function to check for logged in user and redirect to home page if user is already logged in

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ZodSchema } from "zod";

export async function getAuthUser() {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this page");
  }
  //   if user has no profile redirect to create profile page
  if (!user.privateMetadata.hasProfile) {
    redirect("/profile/create");
  }
  return user;
}
// A generic function to handle api errors
export const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

// A generic function to handle zod validations
export function validateZodSchema<T>(schema: ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(
      result.error.errors.map((error) => error.message).join(", ")
    );
  }
  return result.data;
}
