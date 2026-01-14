import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Plane, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Tour Packages', href: '#packages' },
    { name: 'Hajj & Umrah', href: '#hajj-umrah' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
  ];

  const services = [
    { name: 'Air Ticketing', href: '#air-ticketing' },
    { name: 'Visa Assistance', href: '#visa' },
    { name: 'Hotel Reservations', href: '#hotels' },
    { name: 'Domestic Tours', href: '#domestic' },
    { name: 'International Tours', href: '#international' },
    { name: 'Travel Insurance', href: '#insurance' },
  ];

  const popularDestinations = [
    { name: "Cox's Bazar", href: '#coxs-bazar' },
    { name: 'India', href: '#india' },
    { name: 'Saudi Arabia', href: '#saudi' },
    { name: 'Thailand', href: '#thailand' },
    { name: 'Dubai', href: '#dubai' },
    { name: 'Malaysia', href: '#malaysia' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/Safor Travel Logo.png" 
                alt="Safor Travels" 
                className="h-12 w-auto  invert"
              />
            </div>
            <h3 className="text-white text-xl font-bold">Safor Travels</h3>
            <p className="text-sm leading-relaxed">
              Your trusted travel partner in Bangladesh. We provide reliable, affordable, and personalized travel solutions for all your journey needs.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com/safortravelagency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-sky-500 hover:bg-sky-600 p-2 rounded-full transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="flex items-center text-sm hover:text-blue-400 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="flex items-center text-sm hover:text-blue-400 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <a href="tel:+8801711792071" className="text-sm hover:text-blue-400 transition-colors">
                  +880 1711-792071
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                <a href="mailto:info@safortravels.com" className="text-sm hover:text-blue-400 transition-colors">
                  info@safortravels.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>Sat - Thu: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-400">Friday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <h4 className="text-white text-lg font-semibold mb-4">Popular Destinations</h4>
          <div className="flex flex-wrap gap-3">
            {popularDestinations.map((dest) => (
              <a
                key={dest.name}
                href={dest.href}
                className="bg-gray-800 hover:bg-blue-600 px-4 py-2 rounded-full text-sm transition-colors"
              >
                {dest.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Safor Travels. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#terms" className="hover:text-blue-400 transition-colors">
                Terms & Conditions
              </a>
              <a href="#privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#refund" className="hover:text-blue-400 transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}