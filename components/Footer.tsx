'use client'

import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6 font-quicksand">
      <div className="container mx-auto px-4 text-center">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#aboutme" className="hover:text-blue-600">About Me</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/nathanielbauerprofessional"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-gray-900"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/nathaniel-bauer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-gray-900"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400">
          Made by Nathaniel Bauer
        </p>
        <p className="text-sm text-gray-400 mb-4">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
