import React from 'react';

const Hero = () => {
  return (
    <section className="light-beam py-20 px-6 md:px-12 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Accelerate Your Startup with StartMotion
      </h1>
      <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
        The all-in-one platform to launch, grow, and scale your startup. Get started in minutes.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
        Start Your Free Trial
      </button>
    </section>
  );
};

export default Hero;
