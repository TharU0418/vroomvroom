'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const menuItems = [
    // { title: 'Rent', path: '/rent' },
     { title: 'Hire', path: '/hire' },
    // { title: 'Buy', path: '/buy' },
    //{ title: 'Sell', path: '/sell' },
    { title: 'Lady Driver', path: '/ladycab' },
    { title: 'Consultation', path: '/consultation' },
    
  ];

  const socialLinks = [
    // { name: 'Twitter', path: '#', icon: '🐦' },
    { name: 'Instagram', path: '#', icon: <FaInstagram/> },
    { name: 'Facebook', path: 'https://web.facebook.com/people/VRoom-VRoom/61562063228667/', icon: <FaFacebook/>},
    { name: 'YouTube', path: '#', icon: <FaYoutube/> },
  ];

  const serviceLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Careers', path: '/careers' },
   // { title: 'FAQ', path: '/faq' },
   // { title: 'Privacy Policy', path: '/privacy' },
  //  { title: 'Terms of Service', path: '/terms' },
  ];

  return (
    <footer className="text-white">
      {/* Animated Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          className="w-full h-16 text-white"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {/* Brand Column */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-bold"
            >
              Vroom Vroom
            </motion.div>
            <p className="text-red-100 max-w-xs">
              Your ultimate car rental and hiring platform. Find your perfect ride today!
            </p>
            
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.path}
                  whileHover={{ y: -3 }}
                  className="text-2xl transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-white inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <motion.li key={item.title} whileHover={{ x: 5 }}>
                  <Link 
                    href={item.path}
                    className="hover:transition-colors flex items-center"
                  >
                    <span className="mr-2">→</span> {item.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-white inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <motion.li key={item.title} whileHover={{ x: 5 }}>
                  <Link 
                    href={item.path}
                    className="transition-colors flex items-center"
                  >
                    <span className="mr-2">•</span> {item.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-yellow-400 inline-block">
              Newsletter
            </h3>
            <p className="mb-4 text-red-100">
              Subscribe for exclusive deals and car tips!
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                type="submit"
              >
                Subscribe
              </motion.button>
            </form>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-400 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-red-100">
            © {currentYear} Vroom Vroom. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="flex items-center">
              <span className="mr-2">🔒</span>
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">⭐</span>
              <span>Customer Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;