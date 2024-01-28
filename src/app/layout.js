import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'] });

export const metadata = {
  title: "Lista Chá de Panela",
  description: "Lista de produtos chá de panela",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
