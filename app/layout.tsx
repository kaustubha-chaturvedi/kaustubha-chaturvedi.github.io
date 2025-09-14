import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Kaustubha Chatuvedi's Portfolio",
  description: "Software Engineer @ WebCue",
};

const jbm = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
     <GoogleAnalytics gaId="G-XHBC2B7TVE" />
      <body className={jbm.className}>
        {children}
      </body>
    </html>
  )
}
