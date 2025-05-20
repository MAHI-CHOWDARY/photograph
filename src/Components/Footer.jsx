import React from 'react';
import { Camera} from 'lucide-react';
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Camera className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">DR</span>
            </div>
            <p className="text-gray-400 mb-4">
              Capturing life's beautiful moments through the lens of creativity and passion.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=qjidncz" className="group">
                <FaInstagram size={24} className="group-hover:text-pink-500 transition-colors duration-300" />
              </a>
              <a href="#Youtube" className="group">
                <FaYoutube size={24} className="group-hover:text-red-500 transition-colors duration-300" />
              </a>
              <a href="#Twitter" className="group">
                <FaTwitter size={24} className="group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a href="#Facebook" className="group">
                <FaFacebook size={24} className="group-hover:text-blue-600 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Narasannapeta</li>
              <li>Srikakulam 532421</li>
              <li>8978949883</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;