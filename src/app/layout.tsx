import type { Metadata } from "next";
import localFont from "next/font/local";
import { profile } from "@/lib/portfolio";
import "./globals.css";
const kanit = localFont({
  variable: "--font-kanit",
  display: "swap",
  src: [
    {
      path: "../../node_modules/@fontsource/kanit/files/kanit-latin-300-normal.woff2",
      weight: "300",
    },
    {
      path: "../../node_modules/@fontsource/kanit/files/kanit-latin-400-normal.woff2",
      weight: "400",
    },
    {
      path: "../../node_modules/@fontsource/kanit/files/kanit-latin-500-normal.woff2",
      weight: "500",
    },
    {
      path: "../../node_modules/@fontsource/kanit/files/kanit-latin-600-normal.woff2",
      weight: "600",
    },
    {
      path: "../../node_modules/@fontsource/kanit/files/kanit-latin-700-normal.woff2",
      weight: "700",
    },
  ],
});
export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.introduction,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${kanit.variable} dark scroll-pt-8 scroll-smooth antialiased scheme-dark motion-reduce:scroll-auto`}>
      <body>{children}</body>
    </html>
  );
}
