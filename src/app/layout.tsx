import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import * as dotenv from 'dotenv';
dotenv.config();


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ispaan.com',
  description: '...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        
      </body>
    </html>
  )
}
