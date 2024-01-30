import styled from "styled-components";

const Title = styled.h1`
  font-size: 30px;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ theme }) =>
    `calc(100vh - 2*${theme.spacing["container-vertical-padding"]})`};
  width: 100%;
  overflow: hidden;
  padding-top: 48px;
`;

const HeaderTop = styled.div`
  
`;

const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
`;

export const Styles = {
  Title,
  Description,
  Container,
  HeaderTop,
  HeaderBottom
};
