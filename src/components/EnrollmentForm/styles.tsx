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
  padding-right: 16px;

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }
`

export const ContentTitle = styled.h1`
  margin: 64px 0 32px;
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

export const FormInput = styled.input`
  width: 100%;
  height: 60px;
  color: var(--dark-black);
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
  font-family: 'Noto Sans JP', sans-serif;
  transition: 0.3s box-shadow ease;

  &:focus {
    box-shadow: 0 0 2px 2px rgba(228, 63, 90);
  }
`

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: var(--red);
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

  &:hover {
    filter: brightness(90%);
  }
`
