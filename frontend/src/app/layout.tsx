import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '家計簿アプリ',
  description: '家計簿管理アプリケーション',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
