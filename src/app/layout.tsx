import "./globals.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { ReactNode } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const monument = localFont({
  variable: "--font-monument",
  src: "../../public/fonts/monument-extended.otf",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${monument.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
