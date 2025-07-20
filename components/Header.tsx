'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-red-700 shadow-lg py-0' 
          : 'bg-red-700 py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* White rectangular logo section */}
          <div className="w-[240px] md:w-[280px] h-20 bg-red-700 flex items-center justify-center relative z-10 ">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="Luxury Car"
                width={150} // replace with your actual image width
                height={64} // replace with your actual image height
                className="object-contain"
              />
            </Link>
          </div>

                  
        </div>
      </div>



    </nav>
  );
};

export default Header;