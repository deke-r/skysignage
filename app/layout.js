'use client';

import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import '../styles/themes.css';

import Bootstrap from '../libs/Bootstrap';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="d-flex flex-column min-vh-100">
        <Bootstrap />
        <Navbar />
        <main className="flex-grow-1">
        
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
