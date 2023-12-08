import { Inter } from 'next/font/google'
import Navbar from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'
import '@fontsource/angkor';
import '@fontsource/poppins';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Golden Slice Pizzeria',
  description: 'Indulge in the best pizza experience with [Your Pizza Site Name]. Enjoy a wide range of gourmet pizzas made with fresh, quality ingredients. Perfect for family dinners, gatherings with friends, or a cozy night in. Order now and savor the flavor!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className>
        <Navbar />
        <main>
          
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
