import React from 'react';

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 className="text-4xl md:text-6xl font-bold">KIBIRU KIMWAKI MARTIN</h1>
      <p className="mt-4 text-lg md:text-2xl">Full-Stack Developer</p>
      <a href="#contact" className="mt-6 bg-blue-500 px-6 py-3 rounded">Contact Me</a>
    </section>
  );
}

export default Hero;
