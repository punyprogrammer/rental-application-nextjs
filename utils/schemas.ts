import * as z from "zod";
import { ZodSchema } from "zod";
export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long" }),
});
export const imageSchema = z.object({
  image: validateFile(),
});
// a function to validate file type
function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/jpeg", "image/png", "image/jpg"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, `File must be less than 1MB`)
    .refine((file) => {
      return !file || acceptedFileTypes.includes(file.type);
    }, `File must be of type jpeg, jpg or png`);
}
