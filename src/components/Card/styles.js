import styled from "styled-components";

const Card = styled.button`
  background-color: ${({ theme }) => theme.colors["primary"]};
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;

  .image-container {
    background-color: ${({ theme }) => theme.colors["background"]};
    width: 72px;
    height: 72px;
    border-radius: 8px;
    display: grid;
    place-items: center;
  }

  .content{
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }

  .texts{
    text-align: left;
  }

  .status{
    font-size: 12px;
    word-spacing: -5%;
  }

  .status.available{
    color: ${({ theme }) => `${theme.colors["available"]}`};
  }
  .status.selected{
    color: ${({ theme }) => theme.colors["selected"]};
  }

  .product-name{
    color: ${({ theme }) => theme.colors["background"]};
    font-size: 24px;
    font-weight: 600;
  }
`;

export const Styles = {
  Card: Card,
};
