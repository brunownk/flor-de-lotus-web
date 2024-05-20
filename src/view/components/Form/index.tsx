import { cloneElement } from "react";
import { InputProps } from "antd";
import { PasswordProps } from "antd/es/input";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

import { CustomGenericFieldProps } from "@components/DataEntry/Input/Input";
import { IUploadSingleFileProps } from "@components/DataEntry/UploadSingleFile/UploadSingleFile";
import {
  IFormCompositionProps,
  IFormInput,
  IFormProps
} from "./Form";

import {
  Input,
  InputPassword,
  UploadSingleFile
} from "../DataEntry";

export function Form({
  children,
  methods,
  onSubmit: handleSubmit
}: IFormProps) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </FormProvider>
  );
}

function FormInput({ name, children, ...rest }: IFormInput) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => cloneElement(children, {
        ...rest,
        ...field,
        error: error?.message,
      })}
    />
  );
}

Form.Input = (
  props: InputProps & IFormCompositionProps & Omit<CustomGenericFieldProps, 'error'>
) => (
  <FormInput {...props}>
    <Input />
  </FormInput>
);

Form.Password = (
  props: PasswordProps & IFormCompositionProps & Omit<CustomGenericFieldProps, 'error'>
) => (
  <FormInput {...props}>
    <InputPassword />
  </FormInput>
);

Form.UploadSingleFile = (props: IFormCompositionProps & IUploadSingleFileProps) => (
  <FormInput {...props}>
    <UploadSingleFile />
  </FormInput>
);
