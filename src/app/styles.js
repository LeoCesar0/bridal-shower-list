import styled from "styled-components";

const Title = styled.h1`
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 36px */
  letter-spacing: -0.72px;
  margin-bottom: 8px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%; /* 24px */
  letter-spacing: -0.48px;
`;

const Form = styled.form`
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({theme}) => `calc(100vh - 2*${theme.spacing["container-vertical-padding"]})`};
  width: 100%;
  padding-top:48px;
`;

const Footer = styled.footer`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  width: 100%;
  /* margin-top: auto; */
  margin-top: calc(100vh * 111/812);

  & img {
    display: block;
  }

  & .inviters {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

export const Styles = {
  Form,
  Title,
  Subtitle,
  Footer,
  Container,
};
