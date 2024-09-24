import * as zod from "zod";

export const createPetBreedValidationSchema = zod.object({
  name: zod.string().min(1),
  animalTypeId: zod.number(),
})

export type CreatePetBreedFormData = zod.infer<typeof createPetBreedValidationSchema>
