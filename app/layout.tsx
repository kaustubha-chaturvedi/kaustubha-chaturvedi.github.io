import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import Head from "next/head";
import Script from "next/script";
import '@/styles/globals.css'

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
      <Head>
       <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XHBC2B7TVE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XHBC2B7TVE');
          `}
        </Script>
      </Head>
      <body className={jbm.className}>
        {children}
      </body>
    </html>
  )
}
