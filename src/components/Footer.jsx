import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white font-heading">Infinity</h3>
            <p className="text-gray-400 leading-relaxed">
              Providing world-class dental care with a gentle touch. Your smile is our priority, and your comfort is our commitment.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex items-center justify-center rounded-full bg-gray-800 p-2 text-gray-100 transition-colors hover:bg-gray-700 hover:text-primary"
              >
                <Facebook className="h-5 w-5 shrink-0" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex items-center justify-center rounded-full bg-gray-800 p-2 text-gray-100 transition-colors hover:bg-gray-700 hover:text-primary"
              >
                <Instagram className="h-5 w-5 shrink-0" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex items-center justify-center rounded-full bg-gray-800 p-2 text-gray-100 transition-colors hover:bg-gray-700 hover:text-primary"
              >
                <Twitter className="h-5 w-5 shrink-0" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/"><span className="cursor-pointer hover:text-primary transition-colors">Home</span></Link></li>
              <li><Link href="/about"><span className="cursor-pointer hover:text-primary transition-colors">About Us</span></Link></li>
              <li><Link href="/services"><span className="cursor-pointer hover:text-primary transition-colors">Services</span></Link></li>
              <li><Link href="/contact"><span className="cursor-pointer hover:text-primary transition-colors">Contact</span></Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-heading">Our Services</h4>
            <ul className="space-y-3">
              <li className="hover:text-primary transition-colors cursor-default">Root Canal Treatment</li>
              <li className="hover:text-primary transition-colors cursor-default">Dental Implants</li>
              <li className="hover:text-primary transition-colors cursor-default">Teeth Whitening</li>
              <li className="hover:text-primary transition-colors cursor-default">Cosmetic Dentistry</li>
              <li className="hover:text-primary transition-colors cursor-default">Kids Dentistry</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-heading">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start"><MapPin className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" /><span>123 Dental Street, Medical Park,<br />Mumbai, Maharashtra 400001</span></li>
              <li className="flex items-center"><Phone className="w-5 h-5 text-primary mr-3 shrink-0" /><span>+91 99232 71737</span></li>
              <li className="flex items-center"><Mail className="w-5 h-5 text-primary mr-3 shrink-0" /><span>info@infinity.com</span></li>
              <li className="flex items-start"><Clock className="w-5 h-5 text-primary mr-3 mt-1 shrink-0" /><span>Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Infinity Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
