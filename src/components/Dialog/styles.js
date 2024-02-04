import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(71, 71, 71, 0.69);

  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  @keyframes scaleIn {
    from {
      transform: scale(0.75);
    }
    to {
      transform: scale(1);
    }
  }

  position: relative;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 28px;
  animation: scaleIn 0.3s;
  width: calc(100% - 20px);
  max-width: calc(${({ theme }) => theme.spacing["container-max-width"]} - 20px);

  .close{
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`;

export const Header = styled.header``;

export const Title = styled.h3`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
  font-size: 16px;
  font-size: 500;
  letter-spacing: -1px;
`;

export const Actions = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Styles = {
  Content,
  Overlay,
  Actions,
  Title,
  Header,
};
