import React,{useState, useEffect} from 'react';
import Navbar from '../components/ui/Navbar';
import Hero from '../components/ui/Hero';
import Features from '../components/ui/Features';
import HowItWorks from '../components/ui/HowItWorks';
import UseCases from '../components/ui/UseCases';
import Footer from '../components/ui/Footer';

export const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div className="antialiased text-gray-800 min-h-screen flex flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black">
                Skip to main content
            </a>
            <Navbar mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            <main id="main-content" className="flex-1 relative h-full">
                <Hero/>
                <Features/>
                <HowItWorks/>
                <UseCases/>
            </main>
            <Footer/>
      </div>
    )
}