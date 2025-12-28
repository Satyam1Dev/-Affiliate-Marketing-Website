import React from 'react';
import { LucideGithub, LucideTwitter, LucideLinkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} PickifyHub. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <LucideGithub size={20} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <LucideTwitter size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <LucideLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
