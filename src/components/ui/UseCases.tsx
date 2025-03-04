import React from 'react';

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
            <span className="text-[#0047AB]">MathSnap</span> for Everyone
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover how MathSnap is transforming mathematics learning and problem-solving across different scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate__animated animate__fadeIn">
            <div className="h-3 bg-[#0047AB] w-full"></div>
            <div className="p-6">
              <div className="bg-[#0047AB]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0047AB]/20 transition-all duration-300">
                <svg className="w-8 h-8 text-[#0047AB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.163 3.422a12.083 12.083 0 01.665 6.47 8.955 8.955 0 00-5.356 1.857 8.955 8.955 0 01-8.664-1.857 8.955 8.955 0 01-1.665-6.47 12.078 12.078 0 001.153-1.76 8.234 8.234 0 001.772 1.153 8.234 8.234 0 001.153 1.76 8.234 8.234 0 001.772-1.153 8.234 8.234 0 001.153-1.76z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-800">For Students</h3>
              <p className="text-neutral-600 mb-6">
                Boost your understanding and confidence in mathematics. MathSnap helps you solve homework problems and study more effectively.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#00BFFF] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-neutral-700">Get help with homework anytime</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#00BFFF] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-neutral-700">Understand concepts with step-by-step solutions</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#00BFFF] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-neutral-700">Practice with similar problems to build skills</p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="text-sm text-neutral-500 italic">"MathSnap helped me improve my calculus grade from a C to an A-."</div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="w-8 h-8 bg-[#0047AB] rounded-full flex items-center justify-center text-white text-xs font-bold">JS</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-800">Jamie S.</p>
                    <p className="text-xs text-neutral-500">High School Senior</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate__animated animate__fadeIn animate__delay-1s">
            <div className="h-3 bg-[#00BFFF] w-full"></div>
            <div className="p-6">
              <div className="bg-[#00BFFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#00BFFF]/20 transition-all duration-300">
                <svg className="w-8 h-8 text-[#00BFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M16 6V4a3 3 0 00-5.356-1.857M16 6h.01M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2zM9 14v3m4-3v3m4-3v3M3 21L21 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-800">For Parents</h3>
              <p className="text-neutral-600 mb-6">
                Help your children with math homework even when the problems are challenging. MathSnap empowers you to support their learning journey.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#0047AB] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-neutral-700">Assist with homework without having to relearn math</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#0047AB] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-neutral-700">Track your child's progress and problem areas</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#0047AB] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-neutral-700">Build confidence in supporting educational needs</p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="text-sm text-neutral-500 italic">"Finally able to help my daughter with her advanced algebra without feeling lost."</div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="w-8 h-8 bg-[#00BFFF] rounded-full flex items-center justify-center text-white text-xs font-bold">RL</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-800">Robert L.</p>
                    <p className="text-xs text-neutral-500">Parent of 10th grader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate__animated animate__fadeIn animate__delay-2s">
            <div className="h-3 bg-[#0047AB] w-full"></div>
            <div className="p-6">
              <div className="bg-[#0047AB]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0047AB]/20 transition-all duration-300">
                <svg className="w-8 h-8 text-[#0047AB]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16M4 17v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-800">For Teachers</h3>
              <p className="text-neutral-600 mb-6">
                Create engaging lessons and provide additional support materials. MathSnap helps you illustrate complex concepts clearly.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#00BFFF] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-neutral-700">Generate practice problems with solutions</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#00BFFF] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-neutral-700">Create supplementary materials for students</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#00BFFF] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-sm text-neutral-700">Help students develop self-guided learning skills</p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="text-sm text-neutral-500 italic">"I use MathSnap to create varied examples that show different approaches to problems."</div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="w-8 h-8 bg-[#0047AB] rounded-full flex items-center justify-center text-white text-xs font-bold">DM</div>
                  <div className="ml=3">
                    <p className="text-sm font-medium text-neutral-800">Dr. Mitchell</p>
                    <p className="text-xs text-neutral-500">High School Math Teacher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
               
