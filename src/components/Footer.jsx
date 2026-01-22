import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-white flex items-center justify-center">
              <span className="text-white dark:text-neutral-900 font-bold text-sm">H</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">
              HEMEH Technologies
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 text-sm">
            <a href="#services" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              About
            </a>
            <Link to="/dashboard" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              Dashboard
            </Link>
            <a href="#contact" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            &copy; 2026 HEMEH Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
