import * as zod from "zod";

export const createPetValidationSchema = zod.object({
  file: zod.instanceof(File).nullable().optional(),
  name: zod.string().min(1),
  email: zod.string().email().min(1),
  petname: zod.string().min(1),
  password: zod.string().min(6),
})

export type CreatePetFormData = zod.infer<typeof createPetValidationSchema>
