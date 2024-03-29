import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors["primary"]};
  padding: 8px;
  width: calc(100% - 24px);
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  padding-right: 48px;
  position: relative;

  .disabled-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(28, 28, 28, 0.4);
    border-radius: 8px;
  }

  .image-container {
    background-color: ${({ theme }) => theme.colors["background"]};
    width: 72px;
    height: 72px;
    border-radius: 8px;
    display: grid;
    place-items: center;
    overflow: hidden;

    .image {
      width: 72px;
      height: 72px;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    gap: 8px;
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
    line-height: 120%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    &.sm{
      font-size: 20px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;

    p {
      font-family: "Inter";
      font-weight: 300;
      font-size: 14px;
      color: ${({ theme }) => theme.colors["background"]};
    }
  }
`;

const ButtonContainer = styled.div`
  width: 62px;
  height: 62px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 50%;
  right: -20px;
  transform: translateY(-50%);

  ::before {
    content: "";
    @keyframes pulse {
      0% {
        transform: scale(1) translateY(-50%);
      }
      40% {
        transform: scale(0.9) translateY(-50%);
      }
      60% {
        transform: scale(0.9) translateY(-50%);
      }
      80% {
        transform: scale(1) translateY(-50%);
      }
      100% {
        transform: scale(1) translateY(-50%);
      }
    }

    width: 62px;
    height: 62px;
    position: absolute;

    animation: pulse 2.5s infinite ease-out;
    transform-origin: top;

    inset: 0;

    top: 50%;
    transform: translateY(-50%);

    background-color: rgba(115, 156, 143, 0.5);
    border-radius: 50%;
  }

  .button-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 49px;
    height: 49px;
    background-color: rgba(115, 156, 143, 1);
    border-radius: 50%;
    border: 0;
    cursor: pointer;
  }
`;

export const Styles = {
  Card: Card,
  ButtonContainer,
};
