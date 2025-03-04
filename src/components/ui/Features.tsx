import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
            Powerful <span className="text-[#0047AB]">Features</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            MathSnap combines cutting-edge AI with an intuitive interface to solve your math problems instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#00BFFF] hover:transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeIn">
            <div className="rounded-full bg-[#0047AB]/10 w-16 h-16 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#0047AB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-800">Camera Capture</h3>
            <p className="text-neutral-600 mb-4">
              Simply point your device's camera at any math problem - handwritten or printed - and MathSnap will instantly recognize it.
            </p>
            <div className="flex items-center text-sm text-[#0047AB]">
              <span>Works with any device</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0047AB] hover:transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeIn animate__delay-1s">
            <div className="rounded-full bg-[#00BFFF]/10 w-16 h-16 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#00BFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707M21 12v-1m-6.364-1.636l.707-.707M21 12h-1M4 12H3m2.828 9.9a5 5 0 11-6.828 0 5 5 0 016.828 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-800">AI-Powered Solutions</h3>
            <p className="text-neutral-600 mb-4">
              Our advanced AI engine delivers accurate solutions to algebra, calculus, statistics, and more in milliseconds.
            </p>
            <div className="flex items-center text-sm text-[#0047AB]">
              <span>99.8% accuracy rate</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#00BFFF] hover:transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeIn animate__delay-2s">
            <div className="rounded-full bg-[#0047AB]/10 w-16 h-16 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#0047AB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-800">Step-by-Step Explanations</h3>
            <p className="text-neutral-600 mb-4">
              Don't just get the answer - understand the solution with detailed, clear explanations for every step.
            </p>
            <div className="flex items-center text-sm text-[#0047AB]">
              <span>Learn while solving</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#how-it-works" className="inline-flex items-center px-6 py-3 bg-[#0047AB] hover:bg-[#00BFFF] text-white font-medium rounded-md transition-colors duration-300">
            <span>See How It Works</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
