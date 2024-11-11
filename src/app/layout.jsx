import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import Sidebar from "@/components/Sidebar"

import Banner from "@/components/Banner"

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Radol',
    default: 'Radol ',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >

  <body className="h-full">
        <div className="flex h-full">
          
          <aside className="fixed top-0 left-0 h-full w-64 bg-gray-100">
          
            <Sidebar />
          </aside>
          
          <main className="ml-64 flex-grow p-4 overflow-auto">
    
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
