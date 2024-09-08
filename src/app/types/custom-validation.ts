export interface CustomFormFieldValidation {
  validate: (value: string) => Promise<boolean>;
  errorMessage: string;
}
