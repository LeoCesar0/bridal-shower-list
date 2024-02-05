import { Poppins } from "next/font/google";
import { StyledComponentsProvider } from "@/provider/StyledComponentsProvider";
import StyledComponentsRegistry from "@/lib/registry";
import "../styles/fonts.css";
import GlobalContextProvider from "@/provider/GlobalContextProvider";

export const metadata = {
  title: "Chá de Casa Nova",
  description: "Lista de produtos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <StyledComponentsRegistry>
        <StyledComponentsProvider>
          <GlobalContextProvider>
            <body>
              <div id="app-container">{children}</div>
            </body>
          </GlobalContextProvider>
        </StyledComponentsProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
