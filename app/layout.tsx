import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: "Kaustubha Chatuvedi",
  description: "Software Engineer @ Prishni",
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
