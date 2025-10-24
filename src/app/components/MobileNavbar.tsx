'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';


export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#31283d] shadow-md relative z-50"> 
      <div className="flex">
        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="p-2 text-2xl text-white max-sm:active:bg-pink-300 z-[60]"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-[#31283d] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center mt-20 gap-6 text-lg font-medium">
          <Link className="max-sm:active:bg-pink-300 dark:text-white" href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="max-sm:active:bg-pink-300 dark:text-white" href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link className="max-sm:active:bg-pink-300 dark:text-white" href="/articles" onClick={() => setIsOpen(false)}>Articles</Link>
          <Link className="max-sm:active:bg-pink-300 dark:text-white" href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Overlay (behind the navbar + drawer) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
