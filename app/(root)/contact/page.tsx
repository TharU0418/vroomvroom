'use client';

import { FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-red-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl mt-20 bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100 transform hover:shadow-2xl transition-all duration-300">
        
        {/* Left - Contact Info */}
        <div className="bg-gradient-to-br from-red-700 to-red-600 text-white w-full md:w-2/5 p-8 md:p-10 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-red-800 rounded-full opacity-20"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-red-800 rounded-full opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Let&rsquo;s Connect</h2>
            <p className="text-red-100 mb-12 text-sm leading-relaxed">
              Join with us to experience top-notch driving services across Sri Lanka. Whether you need a driver for daily commutes, long trips, or tours, we&rsquo;re here to help!
            </p>

            <div className="space-y-6 mb-16">
              <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-1 transition-transform duration-200">
                <div className="bg-red-800 p-3 rounded-lg group-hover:bg-red-900 transition-colors">
                  <FaPhone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-200 text-sm">PHONE</h4>
                  <p className="text-white">+7402032323</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-1 transition-transform duration-200">
                <div className="bg-red-800 p-3 rounded-lg group-hover:bg-red-900 transition-colors">
                  <CiMail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-200 text-sm">EMAIL</h4>
                  <p className="text-white">support@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-1 transition-transform duration-200">
                <div className="bg-red-800 p-3 rounded-lg group-hover:bg-red-900 transition-colors">
                  <IoLocation className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-200 text-sm">ADDRESS</h4>
                  <p className="text-white">Narahenpita, Colombo</p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="border-t border-red-500 pt-6">
              <h4 className="font-semibold text-red-200 text-sm mb-4">FOLLOW US</h4>
              <div className="flex gap-3">
                {[
                  { icon: FaFacebookF, color: "hover:bg-blue-600", label: "Facebook", link:"https://web.facebook.com/people/VRoom-VRoom/61562063228667/" },
                //  { icon: FaTwitter, color: "hover:bg-blue-400", label: "Twitter" },
                  { icon: FaInstagram, color: "hover:bg-pink-600", label: "Instagram" , link:""},
                  { icon: FaLinkedinIn, color: "hover:bg-blue-700", label: "LinkedIn" , link:""},
                  { icon: FaYoutube, color: "hover:bg-red-500", label: "YouTube", link:"" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`bg-red-800 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${social.color} group relative`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-3/5 p-8 md:p-12 bg-white">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">We would like to here from you.</h2>
              {/* <p className="text-gray-600 leading-relaxed">
                We'll create high-quality linkable content and build at least 40 high-authority links to each asset,
                paving the way for you to grow your rankings and improve brand visibility.
              </p> */}
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Trangely"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Email</label>
                  <input
                    type="email"
                    placeholder="hello@nurency.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Your Subject</label>
                <input
                  type="text"
                  placeholder="I want to hire you quickly"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={5}
                  placeholder="Write here your message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-700 to-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}