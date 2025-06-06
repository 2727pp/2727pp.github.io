import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '设计师作品集 | Portfolio',
  description: '专业设计作品集展示，包含产品设计、交互设计、服务设计、用户体验设计和游戏设计',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
} 