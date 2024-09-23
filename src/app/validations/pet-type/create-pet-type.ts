import * as zod from "zod";

export const createPetTypeValidationSchema = zod.object({
  name: zod.string().min(1),
})

export type CreatePetTypeFormData = zod.infer<typeof createPetTypeValidationSchema>
