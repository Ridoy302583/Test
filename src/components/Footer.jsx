import React from 'react';
import { FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">StartMotion</h3>
          <p className="text-gray-400">Accelerate your startup's growth with our powerful platform.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FiTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FiLinkedin /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FiFacebook /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2023 StartMotion. All rights reserved.</p>
        <p className="mt-2">Designed by WebSparks AI</p>
      </div>
    </footer>
  );
};

export default Footer;
