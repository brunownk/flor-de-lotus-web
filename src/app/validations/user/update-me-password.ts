import * as zod from "zod";
import { translateHoF } from "@utils/translate-hof";

const translate = translateHoF("forms.user");

export const updateMePasswordValidationSchema = zod.object({
  oldPassword: zod.string().min(6),
  password: zod.string().min(6),
  passwordConfirmation: zod.string().min(6),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: translate('passwords-not-match'),
  path: ['passwordConfirmation'],
})

export type UpdateMePasswordFormData = zod.infer<typeof updateMePasswordValidationSchema>
