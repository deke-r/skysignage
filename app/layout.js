'use client';

import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import '../styles/themes.css';

import Bootstrap from '../libs/Bootstrap';
import Navbar from '@/components/Navbar';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');




  return (
    <html lang="en" suppressHydrationWarning>
      <body className="d-flex flex-column min-vh-100">
        <Bootstrap />
        <TopBar/>
        <Navbar />
        <main className="flex-grow-1">
        
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
