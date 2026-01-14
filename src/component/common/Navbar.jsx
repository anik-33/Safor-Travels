import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, User, Plane, Hotel, FileText, Globe } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tour Packages', href: '#packages' },
    { name: 'Hajj & Umrah', href: '#hajj-umrah' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Air Ticketing', href: '#air-ticketing', icon: Plane },
    { name: 'Tour Packages', href: '#tour-packages', icon: Globe },
    { name: 'Visa Assistance', href: '#visa', icon: FileText },
    { name: 'Hotel Reservations', href: '#hotels', icon: Hotel },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-11 text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+8801711792071" className="flex items-center hover:text-blue-100 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">+880 1711-792071</span>
              </a>
              <a href="mailto:info@safortravels.com" className="hidden md:flex items-center hover:text-blue-100 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                info@safortravels.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden lg:flex items-center">
                <MapPin className="w-4 h-4 mr-1.5" />
                Dhaka, Bangladesh
              </span>
              <a 
                href="https://facebook.com/safortravelagency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3">
              <img 
                src="/Safor Travel Logo.png" 
                alt="Safor Travels Logo" 
                className="h-14 w-auto"
              />
             
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md text-base font-medium transition-colors flex items-center"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="flex items-center px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <service.icon className="w-5 h-5 mr-3 text-blue-500" />
                        <span className="font-medium">{service.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sign In & Book Now */}
            <div className="hidden lg:flex items-center space-x-3">
              <a 
                href="#signin" 
                className="flex items-center text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md font-medium transition-colors"
              >
                <User className="w-5 h-5 mr-2" />
                Sign In
              </a>
              <a 
                href="#contact" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Book Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 rounded-md font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Services */}
              <div className="border-t border-gray-100 pt-2 mt-2">
                <div className="text-gray-500 text-xs font-semibold px-4 py-2 uppercase tracking-wide">
                  Services
                </div>
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="flex items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-md transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <service.icon className="w-5 h-5 mr-3 text-blue-500" />
                    {service.name}
                  </a>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="border-t border-gray-100 pt-3 mt-3 space-y-2">
                <a 
                  href="#signin" 
                  className="flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-md font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-5 h-5 mr-2" />
                  Sign In
                </a>
                <a 
                  href="#contact" 
                  className="bg-blue-500 hover:bg-blue-600 text-white block px-4 py-3 rounded-md font-medium text-center transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}