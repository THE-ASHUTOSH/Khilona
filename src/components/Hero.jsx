import React from 'react'

const Hero = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
                A magical workshop where
                <span className="block text-red-400">toys come to life</span>
              </h1>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero