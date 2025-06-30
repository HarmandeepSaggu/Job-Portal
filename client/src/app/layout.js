'use client';
import "./globals.css";
import Header from "./Components/Navbar";
import Footer from "./Components/Footer";
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname.startsWith('/dashboard');

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {!hideHeaderFooter && <Header />}
        <main className="flex-grow">
          {children}
        </main>
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}