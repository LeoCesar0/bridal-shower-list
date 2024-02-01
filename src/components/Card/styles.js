import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors["primary"]};
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  overflow: hidden;

  .image-container {
    background-color: ${({ theme }) => theme.colors["background"]};
    width: 72px;
    height: 72px;
    border-radius: 8px;
    display: grid;
    place-items: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    flex: 1;
  }

  .texts {
    text-align: left;
    display: flex;
    flex-direction: column;
  }

  .status {
    font-size: 12px;
    word-spacing: -5%;
    line-height: 110%;
  }

  .status.available {
    color: ${({ theme }) => `${theme.colors["available"]}`};
  }
  .status.selected {
    color: ${({ theme }) => theme.colors["selected"]};
  }

  .product-name {
    color: ${({ theme }) => theme.colors["background"]};
    font-size: 24px;
    font-weight: 600;
    line-height: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .actions{
    display:flex;
    align-items:center;
    justify-content: space-between;
    width:100%;
  }
`;

export const Styles = {
  Card: Card,
};
