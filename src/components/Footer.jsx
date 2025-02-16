import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      &copy; {new Date().getFullYear()} Jekyll & Hydee
    </footer>
  );
}

export default Footer;
