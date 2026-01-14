import { Plane, FileText, Hotel, Globe, Users, Briefcase } from 'lucide-react';

export default function QuickServices() {
  const services = [
    {
      icon: Plane,
      title: 'Air Ticketing',
      description: 'Domestic and international flight bookings with competitive fares and reliable airlines',
      link: '#air-ticketing',
      color: 'bg-blue-500',
      hoverColor: 'group-hover:bg-blue-600'
    },
    {
      icon: Globe,
      title: 'Tour Packages',
      description: 'Domestic tours (Cox’s Bazar and other international destinations),',
      link: '#tour-packages',
      color: 'bg-green-500',
      hoverColor: 'group-hover:bg-green-600'
    },
    {
      icon: FileText,
      title: 'Visa Assistance',
      description: 'Complete visa processing support with documentation guidance and application follow-up',
      link: '#visa',
      color: 'bg-purple-500',
      hoverColor: 'group-hover:bg-purple-600'
    },
    {
      icon: Hotel,
      title: 'Hotel Reservations',
      description: 'Budget to premium hotel bookings with verified accommodation partners worldwide',
      link: '#hotels',
      color: 'bg-orange-500',
      hoverColor: 'group-hover:bg-orange-600'
    },
    {
      icon: Users,
      title: 'Hajj & Umrah',
      description: 'Complete Hajj and Umrah packages with accommodation and travel coordination',
      link: '#hajj-umrah',
      color: 'bg-teal-500',
      hoverColor: 'group-hover:bg-teal-600'
    },
    {
      icon: Briefcase,
      title: 'Corporate Travel',
      description: 'Professional travel solutions for businesses and corporate clients',
      link: '#corporate',
      color: 'bg-indigo-500',
      hoverColor: 'group-hover:bg-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From flight bookings to complete tour packages, we offer comprehensive travel solutions for all your journey needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`${service.color} ${service.hoverColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <span className="inline-flex items-center text-blue-500 font-semibold group-hover:text-blue-600 transition-colors">
                Learn More
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Need help choosing the right service? Our travel experts are here to assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="tel:+8801711792071"
              className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Call Now: +880 1711-792071
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}