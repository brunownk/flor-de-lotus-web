import * as zod from "zod";

export const editPetValidationSchema = zod.object({
  file: zod.instanceof(File).nullable().optional(),
  name: zod.string().min(1),
  petname: zod.string().min(1),
})

export type EditPetFormData = zod.infer<typeof editPetValidationSchema>
