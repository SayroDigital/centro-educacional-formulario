/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.div`
  width: min(100%, 1120px);
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: var(--white);
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
  }
`

export const ContentSection = styled.section`
  width: 100%;
  max-width: 380px;
  padding-right: 32px;

  @media (max-width: 768px) {
    margin-bottom: 32px;

    small,
    canvas {
      display: none !important;
    }
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
    margin-bottom: 12px;
  }

  small {
    font-size: 12px;
    color: #898994;
    font-weight: 400;
    line-height: 1.8;
    margin-bottom: 8px;
    display: block;
    text-align: justify;
  }
`

export const ContentTitle = styled.h1`
  margin-bottom: 32px;
  font-size: 32px;
`

export const Form = styled.form`
  @media (max-width: 768px) {
    margin-top: 24px;
  }
`

export const FormGroup = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  > *:not(:last-child) {
    margin-right: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-right: 0;
    > * {
      margin-bottom: 12px;
    }
  }
`

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: var(--blue);
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s ease;
  font-family: 'Noto Sans JP', sans-serif;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:disabled):hover {
    filter: brightness(90%);
  }

  &:disabled {
    background: var(--grey);
    cursor: not-allowed;
  }
`

export const Instruction = styled.p<{ invalid?: boolean }>`
  font-size: 16px;
  color: ${(props): string => (props.invalid ? 'var(--red)' : '#737380')};
  line-height: 28px;
  margin-bottom: 12px;
`

export const Footer = styled.footer`
  width: min(100%, 1120px);
  margin: 0 auto;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    small {
      display: none !important;
    }
  }

  p {
    font-size: 14px;
    color: #737380;
    margin-bottom: 14px;
  }

  small {
    color: #737380;
    font-weight: bold;
    font-size: 12px;
  }
`
