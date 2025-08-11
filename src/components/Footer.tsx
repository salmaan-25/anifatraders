import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">ANIFA TRADERS</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for premium wooden doors, windows, and custom woodwork. 
              We bring decades of craftsmanship experience to every project.
            </p>
            <div className="flex space-x-4">
              {/* Clickable Icons */}
              <a 
                href="tel:+919382664820" 
                className="bg-amber-600 p-2 rounded-lg hover:bg-amber-500 transition"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="mailto:Anifatraders1967@gmail.com" 
                className="bg-amber-600 p-2 rounded-lg hover:bg-amber-500 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://maps.google.com/?q=No:12/1A vandalur walajabath main road, Padappai-601301" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-amber-600 p-2 rounded-lg hover:bg-amber-500 transition"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href="tel:+919382664820" className="text-gray-300 hover:text-amber-400 transition">
                  +91 9382664820
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:Anifatraders1967@gmail.com" className="text-gray-300 hover:text-amber-400 transition">
                  Anifatraders1967@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-amber-400" />
                <a 
                  href="https://maps.google.com/?q=No:12/1A vandalur walajabath main road, Padappai-601301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-400 transition"
                >
                  No:12/1A vandalur walajabath main road (Opposite to KVB Bank), Padappai - 601301
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-gray-300">Mon-Sat: 9.30AM - 7PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Custom Wooden Doors</li>
              <li className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Premium Windows</li>
              <li className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Furniture Design</li>
              <li className="hover:text-amber-400 transition-colors duration-200 cursor-pointer">Installation Services</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 ANIFA TRADERS. All rights reserved. | Crafted with care for quality woodwork.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
