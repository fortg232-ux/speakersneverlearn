import type React from "react"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <script src="/main.js"></script>
      </head>
      <body className="font-sans relative">
        <div className="fixed inset-0 cyber-grid pointer-events-none opacity-30 z-0" />
        <div className="relative z-10">
          <Header />
          <main className="min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  )
}

export const metadata = {
  title: "BlockBit - Solana Memecoin Trading Platform",
  description: "The ultimate platform for Solana memecoin trading and education. Trade, learn, and earn with BlockBit.",
  generator: "v0.app",
}
