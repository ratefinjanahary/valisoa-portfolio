import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Diary Valisoa",
  description: "Portfolio expérimental d'un étudiant en L3 Informatique à l'ENI Fianarantsoa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="synthwave" className="scroll-smooth">
      <body className={`${outfit.variable} ${firaCode.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
