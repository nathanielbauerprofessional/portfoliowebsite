'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { LuContact } from "react-icons/lu";

export default function Contact() {

  return (
    <section id = "contact" className="p-12 md:p-16">
      <div className="container mx-auto px-0">
        <LuContact className = "mx-auto my-4 text-blue-600 h-8 w-8"/>
        <h1 className="text-3xl text-center mb-4 text-gray-800 font-poppins font-semibold">Get In Touch</h1>
        <hr className="border-blue-600 w-16 mx-auto" />
        <p className = "text-xl font-quicksand my-4 text-center"> Contact me using the form below or on/using any of the listed platforms!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="border border-gray-300 rounded-lg p-12 shadow-sm bg-white font-quicksand">
            <h3 className="text-2xl font-bold mb-2 text-gray-800 font-poppins">Contact</h3>
            <p className="text-gray-600 mb-4">Fill out this form to send me a message directly.</p>
            <form
              action="https://formspree.io/f/mnnnaegd" // Replace with your actual Formspree endpoint
              method="POST"
              className="space-y-4"
              >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Send Message
              </button>
              </form>

          </div>

          {/* Connect With Me */}
          <div className="border border-gray-300 rounded-lg p-12 shadow-sm bg-white font-quicksand">
            <h3 className="text-2xl font-bold mb-2 text-gray-800 font-poppins">Connect With Me!</h3>
            <p className="text-gray-600 mb-4">Find me on these platforms or send me an email.</p>
            <div className="space-y-6">
              <a
                href="https://github.com/nathanielbauerprofessional"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <Github size={20} className = "text-blue-600"/>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nathaniel-bauer/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <Linkedin size={20} className = "text-blue-600"/>
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:nathanielbauerprofessional@gmail.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <Mail size={20} className = "text-blue-600"/>
                <span className="break-all">nathanielbauerprofessional@gmail.com</span>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">I&#39;m always open to new opportunities and collaborations!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
