import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";

export interface MedicalRecordGeneralProps {
  edit?: boolean;
  isLoading?: boolean;
  methods: UseFormReturn<EditUserFormData>;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any | undefined>) => Promise<void>;
}
