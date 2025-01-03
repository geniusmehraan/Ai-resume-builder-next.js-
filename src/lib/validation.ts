import { z } from "zod";

export const optionalString = z.string().trim().optional().or(z.literal(""));

export const generalInfoSchema = z.object({
  title: optionalString,
  description: optionalString,
});

export type GeneralInfoValue = z.infer<typeof generalInfoSchema>;

export const personalSchema = z.object({
  photo: z
    .custom<File | undefined>()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      "must be in image file"
    )
    .refine(
      (file) => !file || file.size <= 1024 * 1024 * 4,
      "file muust be less than 4MB"
    ),
  firstName: optionalString,
  lastName: optionalString,
  jobTitle: optionalString,
  city: optionalString,
  country: optionalString,
  phone: optionalString,
  email: optionalString,
});

export type PersonalSchema = z.infer<typeof personalSchema>;

export const workExperiencesSchema = z.object({
  workExperiences: z
    .array(
      z.object({
        position: optionalString,
        company: optionalString,
        startDate: optionalString,
        endDate: optionalString,
        descrption: optionalString,
      })
    )
    .optional(),
});

export type WorkExperiencesValues = z.infer<typeof workExperiencesSchema>;

export const resumeSchema = z.object({
  ...generalInfoSchema.shape,
  ...personalSchema.shape,
  ...workExperiencesSchema.shape,
});

export type ResumeValues = Omit<z.infer<typeof resumeSchema>, "photo"> & {
  id?: String;
  photo?: File | String | null;
};
