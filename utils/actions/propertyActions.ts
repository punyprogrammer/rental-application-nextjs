"use server";
import { redirect } from "next/navigation";
import db from "../db";
import { getAuthUser, renderError, validateZodSchema } from "../helpers/helper";
import { imageSchema, propertySchema } from "../schemas";
import { uploadImage } from "../supabase";

export const createPropertyAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    const validatedFields = validateZodSchema(propertySchema, rawData);
    const validatedFile = validateZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await db.property.create({
      data: {
        ...validatedFields,
        image: fullPath,
        profileId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/");
};
