import React from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface IFormInput {
  name: string;
  initialValue?: any;
  children: React.ReactElement;
  onChange?: (value: any, event: any) => void;
}

export interface IFormProps {
  onSubmit?: (data: any) => void;
  methods: UseFormReturn<any>;
  children: React.ReactNode;
  className?: string;
}

export interface IFormCompositionProps {
  name: string;
  onChange?: (value: any, event: any) => void;
}
