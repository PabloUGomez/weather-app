import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Aside from './ui/Aside/Aside'
import SearchPage from './ui/Weather/SearchPage'

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
        <div
          style={{
            display: 'grid',
            gridTemplateAreas: `'aside search search' 'aside main main'`,
            gridTemplateColumns: '1fr 12fr',
            gridTemplateRows: '1fr 16fr',
            width: '100%',
            height: '95vh',
            placeItems: 'center',
            margin: '18px',
            gap : '20px'
          }}
          className='text-white'
        >
          <div className='[grid-area:search] w-full'>
            <SearchPage />
          </div>
          <div className='[grid-area:aside] h-full'>
            <Aside />
          </div>
          <div className='[grid-area:main] w-full flex '>{children}</div>
        </div>
      </body>
    </html>
  )
}
