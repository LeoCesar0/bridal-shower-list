import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  background-color: transparent;

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }

  ${(props) =>
    props.variant === "ghost" &&
    `
    background-color: ${props.theme.colors.background};
    border: none;
  `};

`;

export const Styles = {
  Button: Button,
};
