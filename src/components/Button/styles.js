import styled from "styled-components";

const Button = styled.button`
  display: flex;
  font-size: 16px;
  padding: 4px 8px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border: 0;

  ${(props) =>
    props.variant === "primary" &&
    `
    background: ${props.theme.colors.primary};
    color: ${props.theme.colors["primary-text"]};
    border: ${(props) => `1px solid ${props.theme.colors["border"]}`};
 `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    background: ${props.theme.colors.background};
    color: ${props.theme.colors["background-text"]};
 `}

${(props) =>
    props.variant === "confirm" &&
    `
    background: ${props.theme.colors.success};
    color: ${props.theme.colors["background-text"]};
 `}

${(props) =>
    props.size === "sm" &&
    `
    padding: 2px 8px;
    font-size: 12px;
    border-radius: 16px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.25);
 `}

${(props) =>
    props.disabled &&
    `
    opacity: 0.5;
    cursor: auto;
 `}
`;

export const Styles = {
  Button: Button,
};
