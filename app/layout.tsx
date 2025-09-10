import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
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
      <body className={jbm.className}>
        {children}
      </body>
    </html>
  )
}
