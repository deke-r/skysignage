'use client';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className="btn d-flex border-0 align-items-center gap-2 mt-3 theme-toggle-btn"
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <Moon className="icon-rotate text-color" size={18} />
      ) : (
        <Sun className="icon-rotate text-color" size={18} />
      )}
    </button>
  );
}
