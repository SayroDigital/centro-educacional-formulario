import React, { useEffect, useRef, InputHTMLAttributes } from 'react'
import { useField } from '@unform/core'
import { Props as MaskedInputProps } from 'react-input-mask'
import {
  Container,
  StyledInput,
  MaskedInput as InputMask,
  ErrorSpan,
} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])
  return (
    <Container>
      <StyledInput
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        invalid={error !== undefined}
        onChange={(): void => {
          if (inputRef?.current?.value) {
            clearError()
          }
        }}
      />
      {error && <ErrorSpan>{error}</ErrorSpan>}
    </Container>
  )
}

export default Input

export const MaskedInput: React.FC<MaskedInputProps> = ({
  name = '',
  ...rest
}) => {
  const inputRef = useRef<any>(null)
  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value)
      },
      clearValue(ref: any) {
        ref.setInputValue('')
      },
    })
  }, [fieldName, registerField])
  return (
    <Container>
      <InputMask
        ref={inputRef}
        defaultValue={defaultValue}
        invalid={error !== undefined}
        onChange={(): void => {
          if (inputRef?.current?.value) {
            clearError()
          }
        }}
        {...rest}
      />
      {error && <ErrorSpan>{error}</ErrorSpan>}
    </Container>
  )
}
