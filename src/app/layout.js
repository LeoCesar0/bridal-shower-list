import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { StyledComponentsProvider } from "@/provider/StyledComponentsProvider";
import StyledComponentsRegistry from "@/lib/registry";

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
          <body className={poppins.className}>{children}</body>
        </StyledComponentsProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
