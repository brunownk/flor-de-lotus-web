import * as zod from "zod";

export const loginValidationSchema = zod.object({
  username: zod.string().min(1),
  password: zod.string().min(6),
})

export type LoginFormData = zod.infer<typeof loginValidationSchema>
