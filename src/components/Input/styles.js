import styled from "styled-components";

const Input = styled.input`
  font-size: 16px;
  font-weight: 400;
  line-height: 100%; /* 16px */
  letter-spacing: -0.32px;

  display: flex;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;

  background: transparent;

  width: 100%;
  max-width: 300px;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &::placeholder {
    color: rgba(46, 5, 39, 0.35);
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 8px;
`;

export const Container = styled.div`
  width: 100%;
`;

export const Styles = {
  Input,
  Label,
  Container,
};
