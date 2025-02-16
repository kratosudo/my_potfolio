import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-2xl,text-italic">My Portfolio</h1>
      <ul className="flex space-x-4">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
