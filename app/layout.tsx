// /app/layout.tsx
import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/robot/ChatWidget'
import { BRAND } from '@/lib/knowledge/yisas'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0f3460',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || `https://${BRAND.domain}`),
  title: {
    default: `${BRAND.name} - ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  keywords: ['sporcu analizi', 'cocuk spor', 'cimnastik', 'PHV takibi', 'yapay zeka', 'sporcu degerlendirme'],
  authors: [{ name: BRAND.name }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: BRAND.name,
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: BRAND.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: BRAND.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-[#060a13] text-[#f1f5f9] antialiased font-sans">
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
