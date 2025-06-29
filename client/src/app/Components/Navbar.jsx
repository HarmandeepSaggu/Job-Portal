"use client";
import { useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaBriefcase, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (pathname === '/') {
      router.refresh();
    } else {
      router.push('/');
    }
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    router.push('/login');
    setIsMenuOpen(false); // Close menu on mobile if open
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-blue-600 rounded-lg p-2 mr-3">
              <FaBriefcase className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold text-gray-900">JobPortal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={handleHomeClick} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <FaHome className="mr-2" />
              Home
            </button>
            <Link href="/jobs" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <FaBriefcase className="mr-2" />
              Jobs
            </Link>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
          </nav>

          {/* Login & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLoginClick}
              className="hidden md:flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <FaUser className="mr-2" />
              Login
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={handleHomeClick} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <FaHome className="mr-2" />
                Home
              </button>
              <Link href="/jobs" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <FaBriefcase className="mr-2" />
                Jobs
              </Link>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
              <button
                onClick={handleLoginClick}
                className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <FaUser className="mr-2" />
                Login
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
