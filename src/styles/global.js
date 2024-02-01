import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Poppins;
  font-weight: 400;
 }

*:focus{
    outline: 1px solid ${(props) => props.theme.colors.primary};
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

body{
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors["background-text"]};
}

#app-container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  padding: ${({ theme }) =>
    `${theme.spacing["container-vertical-padding"]} ${theme.spacing["container-horizontal-padding"]}`};
  
  max-width: 600px;
  @media screen and (min-width: 600px){
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  }
}


ul,li {
  list-style: none;
}

`;
