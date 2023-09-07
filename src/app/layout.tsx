import Navbar from '@/app/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './components/Providers'

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Blog website',
  description: 'Blog website using JSONPlaceholder'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="py-10 " style={{ minHeight: 'calc(100vh + 280px)' }}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
