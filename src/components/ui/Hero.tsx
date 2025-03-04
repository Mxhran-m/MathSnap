import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-neutral-900 md:p-24 p-10 text-white min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-[#0047AB]/30 to-neutral-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#00BFFF]/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#0047AB]/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="text-[#00BFFF]">AI-Powered</span> Math Problem Solver
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Point, Capture, Solve. Get instant solutions to math problems with MathSnap.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={"/arena"} className="px-8 py-3 bg-[#0047AB] hover:bg-[#00BFFF] text-white font-medium rounded-md transition-all duration-300 text-lg flex items-center justify-center">
                <span>Solve Questions</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
              </Link>
              <a href="#how-it-works" className="px-8 py-3 bg-transparent border-2 border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white font-medium rounded-md transition-all duration-300 text-lg flex items-center justify-center">
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            <div className="mt-8 flex items-center text-gray-400">
              <div className="flex -space-x-2 mr-4">
                <div className="w-10 h-10 rounded-full bg-[#0047AB] flex items-center justify-center text-xs font-bold">JD</div>
                <div className="w-10 h-10 rounded-full bg-[#0077AB] flex items-center justify-center text-xs font-bold">KL</div>
                <div className="w-10 h-10 rounded-full bg-[#0047AB] flex items-center justify-center text-xs font-bold">MS</div>
              </div>
              <p>Trusted by 10,000+ students and educators</p>
            </div>
          </div>

          <div className="relative animate__animated animate__fadeInRight">
            <div className="bg-neutral-800 p-1 rounded-2xl shadow-xl border border-[#0047AB]/30 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-neutral-900 rounded-xl p-4 border border-[#00BFFF]/20">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-400">MathSnap</div>
                </div>
                <div className="bg-neutral-800 rounded-lg p-4 mb-4 relative">
                  <div className="absolute -top-2 -right-2 bg-[#00BFFF] text-xs px-2 py-1 rounded-full text-white">AI Processing</div>
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto mb-4 text-[#00BFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <p className="text-gray-400 text-sm">Take a photo of your math problem</p>
                  </div>
                </div>
                <div className="bg-neutral-800 rounded-lg p-4 mb-4">
                  <div className="text-[#00BFFF] text-lg mb-1 font-mono">∫ 2x² + 3x - 5 dx</div>
                  <div className="h-1 w-full bg-neutral-700 rounded-full mb-3">
                    <div className="h-1 bg-[#00BFFF] rounded-full animate-pulse" style={{ width: '80%' }}></div>
                  </div>
                  <div className="text-white text-lg font-mono flex items-center">
                    <span className="text-[#00BFFF] mr-2">→</span>
                    <span>⅔x³ + ³⁄₂x² - 5x + C</span>
                  </div>
                </div>
                <div className="flex space-x-2 justify-center">
                  <button className="bg-[#0047AB] hover:bg-[#00BFFF] px-4 py-2 rounded-md text-white text-sm transition-colors duration-300">Step by Step</button>
                  <button className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-md text-white text-sm transition-colors duration-300">Try Another</button>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#00BFFF]/10 rounded-full blur-xl"></div>
            <div className="absolute -left-6 -top-6 w-24 h-24 bg-[#0047AB]/10 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="absolute bottom-8 inset-x-0 mx-auto flex flex-col items-center justify-center animate-bounce">
          <a href="#how-it-works" className="text-sm mb-2 text-center">Discover More</a>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
