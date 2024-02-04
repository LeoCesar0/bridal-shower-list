import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ theme }) =>
    `calc(100vh - 2*${theme.spacing["container-vertical-padding"]})`};
  width: 100%;
  padding-top: 16px;
`;

const Header = styled.header`
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
  font-size: 24px;
  font-weight: 400;
  line-height: 100%; 
  letter-spacing: -1px;

  .hello {
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -1px;
  }
`;

const Description = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 118%; /* 18.88px */
  letter-spacing: -0.32px;
  font-family: "Inter";
`;

const MiddleSection = styled.section`
  margin-top:21px;
`;

const Subtitle = styled.h3`
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors["muted-text"]};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 8px;
  margin-top: 32px;

  background-color: ${({ theme }) => theme.colors["border-light"]};
`;

export const Styles = {
  Divider,
  Header,
  Title,
  Subtitle,
  MiddleSection,
  Description,
  Container,
  HeaderTop,
  HeaderBottom,
};
