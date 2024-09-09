import { BaseSyntheticEvent } from "react";
import { UseFormReturn } from "react-hook-form";

export interface PetGeneralProps {
  edit?: boolean;
  editingOtherPet?: boolean;
  isLoading?: boolean;
  methods: UseFormReturn<EditPetFormData>;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any | undefined>) => Promise<void>;
}
