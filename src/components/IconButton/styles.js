import styled from "styled-components";

const Button = styled.button`
  display: flex;
  height: 36px;
  width: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background-color: transparent;

  &:disabled{
    opacity: 0.5;
    cursor: auto;
  }
`;

export const Styles = {
  Button: Button,
};
