import { Providers } from "./providers";
import type { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google'
import "./globals.css";

const jbm = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kaustubha Chatuvedi",
  description: "Software Engineer @ Prishni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jbm.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
