import React from 'react';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="text-2xl font-bold">StartMotion</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Features</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Pricing</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
      </nav>
      <button className="md:hidden text-2xl">
        <FiMenu />
      </button>
    </header>
  );
};

export default Header;
