import { Poppins } from "next/font/google";
import { StyledComponentsProvider } from "@/provider/StyledComponentsProvider";
import StyledComponentsRegistry from "@/lib/registry";
import "../styles/fonts.css";
import GlobalContextProvider from "@/provider/GlobalContextProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Lista Chá de Panela",
  description: "Lista de produtos chá de panela",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <StyledComponentsProvider>
          <GlobalContextProvider>
            <body className={poppins.className}>
              <div id="app-container">{children}</div>
            </body>
          </GlobalContextProvider>
        </StyledComponentsProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
