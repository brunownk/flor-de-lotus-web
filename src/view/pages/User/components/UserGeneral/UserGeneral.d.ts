import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";

export interface UserGeneralProps {
  edit?: boolean;
  isLoading?: boolean;
  methods: UseFormReturn<EditUserFormData>;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any | undefined>) => Promise<void>;
}
