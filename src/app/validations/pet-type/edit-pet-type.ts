import * as zod from "zod";

export const editPetTypeValidationSchema = zod.object({
  name: zod.string().min(1),
})

export type EditPetTypeFormData = zod.infer<typeof editPetTypeValidationSchema>
