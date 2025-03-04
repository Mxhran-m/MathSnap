import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-opacity-95 bg-neutral-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-300">
              © 2025 Designed and developed by Sanan Katpadi.
            </span>
          </div>
          
          <nav className="flex gap-4 text-sm text-gray-300">
            <a href="/about" className="hover:text-gray-500">
              About
            </a>
            <a href="/privacy" className="hover:text-gray-500">
              Privacy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
