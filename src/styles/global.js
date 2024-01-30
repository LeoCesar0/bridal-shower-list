import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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
  max-width: 600px;
  margin: 0 auto;
  padding: ${({ theme }) =>
    `${theme.spacing["container-vertical-padding"]} ${theme.spacing["container-horizontal-padding"]}`};
  overflow: hidden;
}


`;
