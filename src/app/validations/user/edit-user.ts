import * as zod from "zod";

export const editUserValidationSchema = zod.object({
  file: zod.instanceof(File).nullable().optional(),
  name: zod.string().min(1),
  username: zod.string().min(1),
})

export type EditUserFormData = zod.infer<typeof editUserValidationSchema>
