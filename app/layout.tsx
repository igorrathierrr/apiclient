import './globals.css'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/ui/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard de Apartamentos',
  description: 'CRUD de apartamentos com Next.js e CRUDCRUD API',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={inter.className + ' flex'}>
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100 min-h-screen">{children}</main>
      </body>
    </html>
  )
}