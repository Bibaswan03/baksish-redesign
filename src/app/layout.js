import { Inter } from "next/font/google";
import "./globals.css";
import BackToTopButton from "./Components/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Baksish",
  description: "Your Gateway to Appreciation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
