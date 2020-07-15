import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  border-radius: 8px;
  position: relative;
  padding-left: 8px;
  cursor: pointer;
  font-size: 18px;
  user-select: none;
  background-color: var(--light-grey);

  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover input ~ span {
    background-color: var(--white);
  }

  > input:checked ~ span {
    background-color: var(--red);
  }
`

export const RadioButton = styled.span`
  height: 24px;
  width: 24px;
  position: relative;
  border-radius: 50%;
  background-color: var(--grey);
  margin-right: 8px;

  &:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 8px;
    left: 7.5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`
