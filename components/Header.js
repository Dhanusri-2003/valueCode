'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--color-onyx)] bg-[var(--color-midnight)] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
           <Link href="/" className="flex flex-col items-center text-center">
        <span className="text-2xl font-bold text-[var(--color-electric)]">Value(ode</span>
        <span className="text-sm font-normal text-[var(--color-mutedgray)] mt-1">
          Ai Powered Micro Saas
        </span>
      </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/blueprint" className="text-[var(--color-electric)] font-semibold transition-colors duration-300">
              Blueprint Generator
            </Link>
            {/* FIXED: All anchor links use <a> tags */}
            <a href="#solutions" className="text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors duration-300 font-medium">
              Solutions
            </a>
            <a href="#process" className="text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors duration-300 font-medium">
              How It Works
            </a>
            <a href="#AgentsPreview" className="text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors duration-300 font-medium">
              Agent Store
            </a>
            {/* <a href="#about" className="text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors duration-300 font-medium">
              About
            </a> */}
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary text-sm px-4 py-2">
              Login
            </button>
            <button className="btn-primary text-sm px-4 py-2">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[var(--color-mutedgray)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[var(--color-onyx)] pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/blueprint" className="text-[var(--color-electric)] font-semibold transition-colors duration-300">
                Blueprint Generator
              </Link>
              {/* FIXED: All anchor links use <a> tags */}
              <a href="#solutions" className="text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors duration-300 font-medium">
                Solutions
              </a>
              <a href="#process" className="text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors duration-300 font-medium">
                How It Works
              </a>
              <a href="#AgentsPreview" className="text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors duration-300 font-medium">
                Agent Store
              </a>
              {/* <a href="#about" className="text-[var(--color-mutedgray)] hover:text-[var(--color-electric)] transition-colors duration-300 font-medium">
                About
              </a> */}
              <div className="flex flex-col space-y-2 pt-4">
                <button className="btn-secondary text-sm px-4 py-2 w-full">
                  Login
                </button>
                <button className="btn-primary text-sm px-4 py-2 w-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}