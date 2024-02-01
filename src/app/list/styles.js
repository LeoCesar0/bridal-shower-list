import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ theme }) =>
    `calc(100vh - 2*${theme.spacing["container-vertical-padding"]})`};
  width: 100%;
  padding-top: 48px;
`;

const Header = styled.header`
  margin-bottom: 32px;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  overflow: hidden;
  margin-bottom: 8px;

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }
`;

const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 18px;
`;

const Title = styled.h1`
  font-size: clamp(18px, 6vw, 30px);
  font-weight: 400;
  line-height: 100%; /* 30px */
  letter-spacing: -0.6px;
`;

const Description = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 118%; /* 18.88px */
  letter-spacing: -0.32px;
`;


const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
`;

export const Styles = {
  List,
  Header,
  Title,
  Description,
  Container,
  HeaderTop,
  HeaderBottom,
};
