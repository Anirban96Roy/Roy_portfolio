import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4r1txjq',
      'template_bfpzn0g',
      form.current,
      'Qm3SERqzbNTzWlLHK'
    )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="w-full scroll-mt-20 bg-[#A3DC9A] from-green-200 via-white to-green-200 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto rounded-2xl shadow-xl backdrop-blur-md bg-white/20 border border-white/30">
        <div className="flex flex-col md:flex-row">

          {/* Left: Contact Info */}
          <div className="md:w-1/2 w-full p-8 bg-transparent flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>

            <div className="flex items-start mb-4">
              <Mail className="text-[#EBFFD1] mr-3 mt-1" />
              <div>
                <p className="text-gray-700 font-semibold">Email</p>
                <p className="text-gray-600">royanirban347@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <Phone className="text-[#EBFFD1] mr-3 mt-1" />
              <div>
                <p className="text-gray-700 font-semibold">Phone</p>
                <p className="text-gray-600">+8801632346677</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="text-[#EBFFD1] mr-3 mt-1" />
              <div>
                <p className="text-gray-700 font-semibold">Location</p>
                <p className="text-gray-600">Khulna, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[2px] bg-gray-300"></div>

          {/* Right: Contact Form */}
          <div className="md:w-1/2 w-full p-8 bg-transparent">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-[#E9F8F9]/80 backdrop-blur-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-[#E9F8F9]/80 backdrop-blur-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none bg-[#E9F8F9]/80 backdrop-blur-sm"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-[#EBFFD1] hover:text-black transition shadow-md"
              >
                Send Message
              </button>

              {sent && <p className="text-green-600 mt-3">Message sent successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
