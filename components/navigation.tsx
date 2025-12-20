"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, AlertCircle } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Professionals", href: "/professionals" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">Lockeroom</div>
            <div className="text-sm font-semibold text-foreground">Wellness</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/emergency"
              className="text-red-600 hover:text-red-700 transition-colors text-sm font-medium flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              Emergency
            </Link>
            <Link
              href="/book"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/emergency"
              className="block px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <AlertCircle className="w-4 h-4" />
              Emergency Resources
            </Link>
            <Link
              href="/book"
              className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
