import React from "react";
import { UseFormReturn } from "react-hook-form";

export interface IFormInput {
  name: string;
  children: React.ReactElement;
}

export interface IFormProps {
  onSubmit: (data: any) => void;
  methods: UseFormReturn<any>;
  children: React.ReactNode;
}

export interface IFormCompositionProps {
  name: string;
}
