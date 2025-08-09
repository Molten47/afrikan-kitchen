import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    // Main container for the footer, using a dark background for contrast
    <footer className="w-full bg-gray-900 text-gray-300 py-12 real-font">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid layout for different sections of the footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Section 1: Brand Information */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-white mb-2">
              AfrikaDine
            </h3>
            <p className="text-sm leading-relaxed">
              Bringing the authentic taste of West Africa to South London,
              with fresh ingredients and a passion for culinary excellence.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              &copy; {new Date().getFullYear()} West African Flavors. All rights reserved.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Our Outlets</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Book a Seat</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Menu</a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Information */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-sm">
                  123 Flavor Street, Peckham, London, SE15 1AA, UK
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:+442012345678" className="text-sm hover:text-white transition-colors duration-200">
                  +44 20 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a href="mailto:info@westafricanflavors.com" className="text-sm hover:text-white transition-colors duration-200">
                  info@westafricanflavors.com
                </a>
              </div>
            </div>
          </div>

          {/* Section 4: Social Media */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            {/* Optional: Newsletter signup, using bg-cta for the button */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-3">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-cta text-white px-4 py-2 rounded-r-lg hover:bg-[#8bb962] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
