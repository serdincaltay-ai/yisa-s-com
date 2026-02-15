import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YiSA-S',
  description: 'YiSA-S Landing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-[#060a13] text-[#f1f5f9] antialiased">
        {children}
      </body>
    </html>
  )
}
