import type { Metadata } from "next";
import { clearSansFont, xungaSemiExpandedFont, cabinSketchFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cancionero",
  description: "Cancionero de Jornada Diocesana de Niños 2026",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${clearSansFont.variable} ${xungaSemiExpandedFont.variable} ${cabinSketchFont.variable} h-full antialiased`}
    >
      <body className="min-h-ful">{children}</body>
    </html>
  );
}
