import * as zod from "zod";

export const editPetBreedValidationSchema = zod.object({
  name: zod.string().min(1),
  animalTypeId: zod.any().transform((value) => value?.id),
})

export type EditPetBreedFormData = zod.infer<typeof editPetBreedValidationSchema>
