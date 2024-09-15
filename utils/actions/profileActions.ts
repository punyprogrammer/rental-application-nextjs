"use server";
import db from "../db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { currentUser, auth, clerkClient } from "@clerk/nextjs/server";
import { profileSchema } from "../schemas";
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";
import { getAuthUser, renderError, validateZodSchema } from "../helpers/helper";

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
    const validatedFields = validateZodSchema(profileSchema, rawData);
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
    return renderError(error);
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

// action to fetch user profile
export const fetchUserProfile = async () => {
  const user = await getAuthUser();
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });
  //   if no profile found redirect to create profile page
  if (!profile) {
    redirect("/profile/create");
  }
  return profile;
};

// action to update user profile
export const updateUserProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const user = await getAuthUser();
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateZodSchema(profileSchema, rawData);
    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: {
        ...validatedFields,
      },
    });
    revalidatePath("/profile");
    return { message: "Profile Updated Successfully" };
  } catch (error) {
    return renderError(error);
  }
};
