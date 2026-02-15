import './globals.css'

export const metadata = {
  title: 'YiSA-S',
  description: 'Yapay Zeka Destekli Sporcu Analiz Sistemi',
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
