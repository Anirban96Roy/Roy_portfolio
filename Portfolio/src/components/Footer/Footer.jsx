import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#A3DC9A] text-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left: Logo or Name */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-[#EBFFD1]">Anirban Roy</h2>
          <p className="mt-2 text-sm text-gray-600">Thanks for visiting my portfolio!</p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-2x1  font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#about" className="font-bold hover:text-[#EBFFD1] transition">About</a></li>
            <li><a href="#skills" className="font-bold hover:text-[#EBFFD1] transition">Skills</a></li>
            <li><a href="#projects" className="font-bold hover:text-[#EBFFD1] transition">Projects</a></li>
            <li><a href="#contact" className="font-bold hover:text-[#EBFFD1]transition">Contact</a></li>
          </ul>
        </div>

        {/* Right: Social Icons */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Connect with Me</h3>
          <div className="flex space-x-4">
          
            <a href="https://github.com/Anirban96Roy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#EBFFD1]">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/anirban-roy007/" target="_blank" rel="noopener noreferrer" className="hover:text-[#EBFFD1]">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-200 text-sm text-gray-500">
        © {new Date().getFullYear()} Anirban Roy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
