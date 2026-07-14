import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-3xl font-bold tracking-tight mb-6 inline-block">
              Agenc<span className="text-accent">y</span>.
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">Content Strategy</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent transition-colors">PPC Campaigns</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <span className="block text-white font-medium mb-1">Address:</span>
                123 Marketing Ave, Suite 400<br />New York, NY 10001
              </li>
              <li className="text-gray-400">
                <span className="block text-white font-medium mb-1">Phone:</span>
                +1 (555) 123-4567
              </li>
              <li className="text-gray-400">
                <span className="block text-white font-medium mb-1">Email:</span>
                hello@agency.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Digital Marketing Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
