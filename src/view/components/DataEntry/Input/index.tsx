import { cloneElement, forwardRef } from 'react';
import { Input as AntdInput, Flex, Skeleton, InputProps } from 'antd';
import { PasswordProps } from 'antd/es/input';
import { PiEyeClosed } from "react-icons/pi";
import { HiEye } from "react-icons/hi";

import { useLoading } from '@hooks/useLoading';

import { CustomGenericFieldProps } from './Input';

import { Label, ErrorMessage, InfoMessage } from '..';

import './styles.scss';

export const InputField = forwardRef(({
  size = 'large',
  antdSizes,
  label,
  error,
  info,
  children,
  ...rest
}: CustomGenericFieldProps, ref) => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading ? (
        <Skeleton.Input
          className={`input ${antdSizes ? '' : 'custom-size'}`}
          size={size === 'middle' ? 'default' : size}
          block
          active
        />
      ) : (
        <Flex
          gap={5}
          vertical
          className={`input-container ${error ? 'has-error' : ''}`.trim()}
        >
          {label && <Label>{label}</Label>}

          {cloneElement(children, {
            error,
            size,
            status: error && 'error',
            className: `input ${antdSizes ? '' : 'custom-size'}`,
            ref,
            ...rest
          })}

          {error && (
            <ErrorMessage>{error}</ErrorMessage>
          )}

          {(info && !error) && (
            <InfoMessage>{info}</InfoMessage>
          )}
        </Flex>
      )}
    </>
  )
});

export const Input = forwardRef((props: InputProps & CustomGenericFieldProps, ref) => (
  <InputField {...props} ref={ref}>
    <AntdInput />
  </InputField>
));


export const InputPassword =forwardRef((props: PasswordProps & CustomGenericFieldProps, ref) => (
  <InputField {...props} ref={ref}>
    <AntdInput.Password
      iconRender={(visible: boolean) => (
        visible ? <HiEye size={20} /> : <PiEyeClosed size={20} />
      )}
    />
  </InputField>
));
