import { cloneElement } from 'react';
import { InputProps, SelectProps } from 'antd';
import { PasswordProps } from 'antd/es/input';
import { Controller, FormProvider, useFormContext } from 'react-hook-form';

import { SwitchProps } from '@components/DataEntry/Switch/Switch';
import { CustomGenericFieldProps } from '@components/DataEntry/Input/Input';
import { IUploadSingleFileProps } from '@components/DataEntry/UploadSingleFile/UploadSingleFile';
import {
  IToggleProps,
  IToggleGroupProps,
} from '@components/DataEntry/Toggle/Toggle';

import { IFormCompositionProps, IFormInput, IFormProps } from './Form';

import {
  Input,
  InputNumber,
  InputPassword,
  Select,
  Switch,
  Toggle,
  UploadSingleFile,
} from '../DataEntry';

export function Form({
  children,
  methods,
  className,
  onSubmit: handleSubmit,
}: IFormProps) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className={className} autoComplete="off">
        {children}
      </form>
    </FormProvider>
  );
}

function FormInput({ name, children, onChange, ...rest }: IFormInput) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return cloneElement(children, {
          ...rest,
          ...field,
          onChange: (value: any, event: any) => {
            field.onChange(value);
            if (onChange) onChange(value, event);
          },
          error: error?.message,
        });
      }}
    />
  );
}

Form.Input = function FormInputComponent(
  props: InputProps &
    IFormCompositionProps &
    Omit<CustomGenericFieldProps, 'error'>,
) {
  return (
    <FormInput {...props}>
      <Input />
    </FormInput>
  );
};

Form.InputNumber = function FormInputNumberComponent(
  props: InputProps &
    IFormCompositionProps &
    Omit<CustomGenericFieldProps, 'error'>,
) {
  return (
    <FormInput {...props}>
      <InputNumber />
    </FormInput>
  );
};

Form.Password = function FormPassWordComponent(
  props: PasswordProps &
    IFormCompositionProps &
    Omit<CustomGenericFieldProps, 'error'>,
) {
  return (
    <FormInput {...props}>
      <InputPassword />
    </FormInput>
  );
};

Form.Toggle = function FormToggleComponent(
  props: IFormCompositionProps & IToggleProps,
) {
  return (
    <FormInput {...props}>
      <Toggle />
    </FormInput>
  );
};

Form.ToggleGroup = function FormToggleGroupComponent(
  props: IFormCompositionProps & IToggleGroupProps,
) {
  return (
    <FormInput {...props}>
      <Toggle.Group />
    </FormInput>
  );
};

Form.Switch = function FormSwitchComponent(
  props: IFormCompositionProps & SwitchProps,
) {
  return (
    <FormInput {...props}>
      <Switch />
    </FormInput>
  );
};

Form.UploadSingleFile = function FormUploadSingleFileComponent(
  props: IFormCompositionProps & IUploadSingleFileProps,
) {
  return (
    <FormInput {...props}>
      <UploadSingleFile />
    </FormInput>
  );
};

Form.Select = function FormSelectComponent(
  props: SelectProps &
    IFormCompositionProps &
    Omit<CustomGenericFieldProps, 'error'>,
) {
  return (
    <FormInput {...props}>
      <Select />
    </FormInput>
  );
};
