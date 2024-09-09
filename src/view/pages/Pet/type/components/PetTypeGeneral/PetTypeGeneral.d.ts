import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";

export interface PetTypeGeneralProps {
  edit?: boolean;
  isLoading?: boolean;
  methods: UseFormReturn<EditPetFormData>;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any | undefined>) => Promise<void>;
}
