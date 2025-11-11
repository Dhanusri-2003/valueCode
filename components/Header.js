'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#D7CCC8] bg-[#F5F0ED] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center text-center">
            <span className="text-2xl font-bold text-[#8B7355]">Value(ode</span>
            <span className="text-sm font-normal text-[#5D4037] mt-1">
              Ai Powered Micro Saas
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/blueprint" className="text-[#8B7355] font-semibold transition-colors duration-300">
              Blueprint Generator
            </Link>
            <a href="#solutions" className="text-[#5D4037] hover:text-[#8B7355] transition-colors duration-300 font-medium">
              Solutions
            </a>
            <a href="#process" className="text-[#5D4037] hover:text-[#8B7355] transition-colors duration-300 font-medium">
              How It Works
            </a>
            <a href="#AgentsPreview" className="text-[#5D4037] hover:text-[#8B7355] transition-colors duration-300 font-medium">
              Agent Store
            </a>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="bg-[#A1887F] text-white text-sm px-4 py-2 rounded-md hover:bg-[#8B7355] transition-colors duration-300">
              Login
            </button> */}
            <Link
              href="/login"
              className="bg-[#A1887F] text-white text-sm px-4 py-2 rounded-md hover:bg-[#8B7355] transition-colors duration-300"
            >
              Login
            </Link>
            <button className="bg-[#8B7355] text-white text-sm px-4 py-2 rounded-md hover:bg-[#6D4C41] transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#5D4037]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#D7CCC8] pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/blueprint" className="text-[#8B7355] font-semibold transition-colors duration-300">
                Blueprint Generator
              </Link>
              <a href="#solutions" className="text-[#5D4037] hover:text-[#8B7355] transition-colors duration-300 font-medium">
                Solutions
              </a>
              <a href="#process" className="text-[#5D4037] hover:text-[#8B7355] transition-colors duration-300 font-medium">
                How It Works
              </a>
              <a href="#AgentsPreview" className="text-[#5D4037] hover:text-[#8B7355] transition-colors duration-300 font-medium">
                Agent Store
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                {/* <button className="bg-[#A1887F] text-white text-sm px-4 py-2 w-full rounded-md hover:bg-[#8B7355] transition-colors duration-300">
                  Login
                </button> */}
                <Link
                  href="/login"
                  className="bg-[#A1887F] text-white text-sm px-4 py-2 w-full rounded-md hover:bg-[#8B7355] transition-colors duration-300"
                >
                  Login
                </Link>

                <button classNam
                e="bg-[#8B7355] text-white text-sm px-4 py-2 w-full rounded-md hover:bg-[#6D4C41] transition-colors duration-300">
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