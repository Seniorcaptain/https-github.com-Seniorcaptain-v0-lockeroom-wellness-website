import Link from "next/link"
import { Mail, Phone, MapPin, AlertCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="bg-red-50 border-b border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-red-900">Crisis Support Available 24/7</p>
                <p className="text-xs text-red-700">If you're in crisis, help is available now</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:1199"
                className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors underline"
              >
                Kenya Red Cross: 1199
              </a>
              <span className="text-red-300">|</span>
              <a
                href="tel:999"
                className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors underline"
              >
                Emergency: 999
              </a>
              <span className="text-red-300">|</span>
              <Link
                href="/emergency"
                className="text-sm font-medium bg-red-600 text-white px-4 py-1.5 rounded-full hover:bg-red-700 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Lockeroom Wellness</h3>
            <p className="text-muted-foreground text-sm">Your confidential partner in mental health and wellness.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/professionals" className="text-muted-foreground hover:text-primary transition-colors">
                  Find a Professional
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-red-600 hover:text-red-700 transition-colors font-medium">
                  Emergency Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@lockeroom.com" className="hover:text-primary transition-colors">
                  support@lockeroom.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Available Nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Lockeroom Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
