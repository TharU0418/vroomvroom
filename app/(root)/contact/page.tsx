'use client';

import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-xl flex flex-col md:flex-row overflow-hidden mt-10">
        {/* Left - Contact Info */}
        <div className="bg-red-700 text-white w-full md:w-1/2 p-8 space-y-6">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p className="text-sm">
            We’ll create high-quality linkable content and build at least 40 high-authority.
          </p>
          <div className="space-y-3 text-sm mt-80">
            
            <div className="flex items-center gap-2">
              <FaPhone className="w-4 h-4" /> +7402032323
            </div>
            <div className="flex items-center gap-2">
              <CiMail className="w-4 h-4" /> support@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <IoLocation className="w-4 h-4" /> Narahenpita
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <p className="text-sm text-gray-500">
            We’ll create high-quality linkable content and build at least 40 high-authority links to each asset,
            paving the way for you to grow your rankings, improve brand.
          </p>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="text-sm text-gray-600">Your Name</label>
                <input
                  type="text"
                  placeholder="John Trangely"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 py-1"
                />
              </div>
              <div className="w-full">
                <label className="text-sm text-gray-600">Your Email</label>
                <input
                  type="email"
                  placeholder="hello@nurency.com"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 py-1"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Your Subject</label>
              <input
                type="text"
                placeholder="I want to hire you quickly"
                className="w-full border-b border-gray-300 focus:outline-none focus:red-teal-500 py-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows={4}
                placeholder="Write here your message"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 py-1 resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-600 transition mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
