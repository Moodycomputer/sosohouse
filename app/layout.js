import './globals.css'
import { Cardo, Work_Sans } from 'next/font/google'

const cardo = Cardo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const workSans = Work_Sans({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'SoSo House',
  description: `Charleston's premier antisocial club`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[cardo.className, workSans.className]}>{children}</body>
    </html>
  )
}
