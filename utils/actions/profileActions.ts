"use server";
import db from "../db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { currentUser, auth, clerkClient } from "@clerk/nextjs/server";
import { profileSchema } from "../schemas";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    // Get hold of the current user
    const user = await currentUser();
    // if no user throw error
    if (!user) {
      throw new Error("User not found");
    }
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    // Create a new profile
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validatedFields,
      },
    });
    //   Once profile created update meta data in clerk
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });

    // on success redirect to home page
  } catch (error) {
    console.log(error);
    return { message: "Profile Creation Failed" };
  }
  redirect("/");
};
// action to fetch user image

export const fetchUserProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });
  return profile?.profileImage;
};
