import styled from 'styled-components'
import InputMask, { Props } from 'react-input-mask'
import { InputHTMLAttributes } from 'react'

export const Container = styled.div`
  width: 100%;
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
}

export const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  color: var(--dark-black);
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
  font-family: 'Noto Sans JP', sans-serif;
  transition: 0.3s box-shadow ease;
  ${(props: InputProps): string =>
    props.invalid ? 'box-shadow: 0 0 2px 2px var(--red);' : ''}

  &:focus {
    box-shadow: ${(props: InputProps): string =>
      props.invalid
        ? '0 0 2px 2px var(--red)'
        : '0 0 2px 2px rgba(0, 146, 224)'};
  }
`
interface MaskedInputProps extends Props {
  invalid?: boolean
}

export const MaskedInput = styled(InputMask)`
  width: 100%;
  height: 60px;
  color: var(--dark-black);
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
  font-family: 'Noto Sans JP', sans-serif;
  transition: 0.3s box-shadow ease;
  ${(props: MaskedInputProps): string =>
    props.invalid ? 'box-shadow: 0 0 2px 2px var(--red);' : ''}

  &:not(:disabled):focus {
    box-shadow: ${(props: MaskedInputProps): string =>
      props.invalid
        ? '0 0 2px 2px var(--red)'
        : '0 0 2px 2px rgba(0, 146, 224)'};
  }
`

export const ErrorSpan = styled.span`
  font-size: 12px;
  color: var(--red);
`
