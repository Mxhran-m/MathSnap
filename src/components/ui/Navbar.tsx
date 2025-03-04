import { GraduationCap } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <nav id="header" className="fixed w-full z-50 bg-neutral-900 bg-opacity-95 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#hero" className="flex-shrink-0 flex items-center">
            <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="text-2xl ml-1 font-bold text-[#00BFFF]">MathSnap</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#hero" className="px-3 py-2 text-sm font-medium hover:text-[#00BFFF] transition-colors">Home</a>
            <a href="#features" className="px-3 py-2 text-sm font-medium hover:text-[#00BFFF] transition-colors">Features</a>
            <a href="#how-it-works" className="px-3 py-2 text-sm font-medium hover:text-[#00BFFF] transition-colors">How It Works</a>
            <a href="#use-cases" className="px-3 py-2 text-sm font-medium hover:text-[#00BFFF] transition-colors">Use Cases</a>
            <Link to={"/arena"} className="ml-2 px-4 py-2 rounded-md bg-[#0047AB] text-white font-medium hover:bg-[#00BFFF] transition-colors">Ask Question</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button id="mobile-menu-button" aria-label="Mobile menu" className="text-white hover:text-[#00BFFF] focus:outline-none" onClick={toggleMobileMenu}>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={`${mobileMenuOpen ? '' : 'hidden'} md:hidden bg-neutral-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#hero" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700 hover:text-[#00BFFF]">Home</a>
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700 hover:text-[#00BFFF]">Features</a>
          <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700 hover:text-[#00BFFF]">How It Works</a>
          <a href="#use-cases" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700 hover:text-[#00BFFF]">Use Cases</a>
          <Link to={"/arena"} className="block px-3 py-2 rounded-md text-base font-medium bg-[#0047AB] text-white hover:bg-[#00BFFF]">Download</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
