/* eslint-disable no-param-reassign */
import React, { useEffect, useRef, InputHTMLAttributes } from 'react'
import { useField } from '@unform/core'

import { Container, RadioButton } from './styles'

export interface CheckboxOption {
  id: string
  value: string
  label: string
}
interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  options: CheckboxOption[]
}

const Radio: React.FC<RadioProps> = ({ name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([])
  const { fieldName, registerField, defaultValue = [] } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter((ref) => ref.checked).map((ref) => ref.value)
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach((ref) => {
          ref.checked = false
        })
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach((ref) => {
          if (values.includes(ref.id)) {
            ref.checked = true
          }
        })
      },
    })
  }, [fieldName, registerField])

  return (
    <>
      {options.map((option, index) => (
        <Container htmlFor={option.id} key={option.id}>
          {option.label}
          <input
            type="radio"
            defaultChecked={defaultValue.find((dv: string) => dv === option.id)}
            ref={(ref): void => {
              inputRefs.current[index] = ref as HTMLInputElement
            }}
            value={option.value}
            name={name}
            id={option.id}
            {...rest}
            {...rest}
          />
          <RadioButton />
        </Container>
      ))}
    </>
  )
}

export default Radio
