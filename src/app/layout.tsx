import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Aside from './ui/Aside/Aside'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'A simple weather app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {' '}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 12fr',
            width: '100%',
            height: '100vh',
            placeItems: 'center',
            padding: '18px 0',
            margin: '0',
            gap: '18px',
          }}
          className='text-white'
        >
          <Aside />
          {children}
        </div>
      </body>
    </html>
  )
}
