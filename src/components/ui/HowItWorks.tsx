import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-[#00BFFF]">MathSnap</span> Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Solving math problems has never been easier. Three simple steps to get your solution.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-[#0047AB]/30 z-0">
            <div className="absolute left-0 h-full bg-gradient-to-r from-[#0047AB] to-[#00BFFF] animate-pulse" style={{ width: '100%' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-neutral-800 rounded-xl p-6 border border-[#0047AB]/30 hover:border-[#00BFFF] transition-all duration-300 animate__animated animate__fadeInLeft">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-[#0047AB] w-16 h-16 flex items-center justify-center text-white text-2xl font-bold">1</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-[#00BFFF]">Capture</h3>
              <p className="text-gray-300 text-center mb-6">
                Open MathSnap and point your camera at any math problem. Our app works with printed text, handwritten notes, and textbook equations.
              </p>
              <div className="bg-neutral-900 rounded-lg p-4 flex items-center justify-center">
                <div className="relative w-full max-w-[200px] mx-auto">
                  <svg className="w-full text-[#00BFFF]" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="10" width="160" height="120" rx="8" stroke="currentColor" strokeWidth="3"></rect>
                    <rect x="40" y="30" width="120" height="80" rx="4" stroke="currentColor" strokeWidth="2"></rect>
                    <circle cx="100" cy="70" r="30" stroke="currentColor" strokeWidth="2"></circle>
                    <circle cx="100" cy="70" r="20" stroke="currentColor" strokeDasharray="4 4" strokeWidth="2"></circle>
                    <line x1="80" y1="70" x2="120" y2="70" stroke="currentColor" strokeWidth="2"></line>
                    <line x1="100" y1="50" x2="100" y2="90" stroke="currentColor" strokeWidth="2"></line>
                    <circle cx="150" cy="40" r="8" fill="currentColor"></circle>
                  </svg>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0047AB]/80 text-white text-xs py-2 text-center rounded-b-lg">
                    Point & Snap
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-xl p-6 border border-[#0047AB]/30 hover:border-[#00BFFF] transition-all duration-300 animate__animated animate__fadeIn animation-delay-200">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-[#0047AB] w-16 h-16 flex items-center justify-center text-white text-2xl font-bold">2</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-[#00BFFF]">Process</h3>
              <p className="text-gray-300 text-center mb-6">
                Our advanced AI instantly recognizes the equation and processes it using our powerful mathematical engine.
              </p>
              <div className="bg-neutral-900 rounded-lg p-4 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0047AB]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#00BFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-[#0047AB]/20 rounded-full flex items-center justify-center relative">
                    <div className="w-5 h-5 border-t-2 border-r-2 border-[#00BFFF] rounded-full animate-spin absolute"></div>
                    <div className="w-4 h-4 bg-neutral-900 rounded-full"></div>
                  </div>
                  <div className="w-12 h-12 bg-[#0047AB]/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#00BFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                    </svg>
                  </div>
                </div>
                <div className="text-center text-[#00BFFF] text-sm font-mono bg-neutral-800 px-3 py-1 rounded-md">
                  AI Processing...
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-xl p-6 border border-[#0047AB]/30 hover:border-[#00BFFF] transition-all duration-300 animate__animated animate__fadeInRight animation-delay-400">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-[#0047AB] w-16 h-16 flex items-center justify-center text-white text-2xl font-bold">3</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-[#00BFFF]">Solution</h3>
              <p className="text-gray-300 text-center mb-6">
                Get the complete solution with step-by-step explanations to help you understand the entire process.
              </p>
              <div className="bg-neutral-900 rounded-lg p-4">
                <div className="text-[#00BFFF] text-sm mb-2 font-mono">∫ x³ + 2x dx</div>
                <div className="h-1 w-full bg-neutral-700 rounded-full mb-4">
                  <div className="h-1 bg-[#00BFFF] rounded-full w-full"></div>
                </div>
                <div className="bg-neutral-800 p-3 rounded-md mb-3">
                  <div className="text-white text-sm font-mono flex items-center mb-1">
                    <span className="text-[#00BFFF] mr-2">→</span>
                    <span>¼x⁴ + x² + C</span>
                  </div>
                  <div className="text-gray-400 text-xs">Final solution</div>
                </div>
                <div className="flex justify-between">
                  <button className="bg-[#0047AB] hover:bg-[#00BFFF] px-3 py-1.5 rounded text-white text-xs transition-colors duration-300 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-7.391c0-.965.734-1.67 1.667-1.67 1.094 0 1.667.734 1.667 1.67H13v7h-2v-7zM13 16V9a4 4 0 00-4-4v1.67A2.98 2.98 0 009 8.334V9h2v6.34l-1.35.944A2.98 2.98 0 0013 16z"></path>
                    </svg>
                    Steps
                  </button>
                  <button className="bg-neutral-700 hover:bg-neutral-600 px-3 py-1.5 rounded text-white text-xs transition-colors duration-300 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 2.772 0 1.165.532 1.688 1.322 1.688 2.445v.083c0 1.4-1.278 1.95-3.006 1.95C8.543 12.956 8.06 13.51 8.06 14.933m0 1.595A2.972 2.972 0 018 18.46 2.972 2.972 0 01-2.238-.618c-.514-.352-1.054-.876-1.596-1.42L10.443 18.893A4.012 4.012 0 018 19c1.632 0 3.21-.395 4.755-1.184 0-.584.073-1.182.29-1.79H8.96A2.966 2.966 0 019 18.107A2.966 2.966 0 0111.933 17h-1.002a2.966 2.966 0 01-2.875.893A2.966 2.966 0 015.98 18.107A2.966 2.966 0 013 19a2.966 2.966 0 012.875-.893A2.966 2.966 0 018.96 17h1.002a2.966 2.966 0 012.875.893A2.966 2.966 0 0114 18.107a2.966 2.966 0 013.04 1.79 2.966 2.966 0 01.215 1.107A2.972 2.972 0 0118 18.46c.053.357.53 1.325 1.32 1.953A4.012 4.012 0 0010.443 18.893A4.002 4.002 0 0012 19c1.632 0 3.21-.395 4.755-1.184z"></path>
                    </svg>
                    Practice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#0047AB] to-[#00BFFF] p-8 rounded-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-2">Ready to solve math problems instantly?</h3>
                <p className="text-white/80 mb-6 md:mb-0">
                  Use MathSnap now and start solving math problems instantly.
                </p>
              </div>
              <div className="flex flex-col space-y-3 md:space-y-4">
                <Link to={"/arena"} className="bg-white hover:bg-gray-100 text-[#0047AB] font-medium rounded-lg px-6 py-3 text-center transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.97 3.59c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 019.288 0M16 6V4a3 3 0 00-3-3h-4a3 3 0 00-3 3v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  Let's Go
                </Link>
                <a href="#use-cases" className="bg-transparent hover:bg-white/10 text-white font-medium rounded-lg px-6 py-3 text-center transition-all duration-300">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
