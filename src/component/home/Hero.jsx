import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Calendar, MapPin } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000',
      title: 'Explore the World',
      highlight: 'With Confidence',
      description: 'Your trusted travel partner for unforgettable journeys across Bangladesh and beyond',
      primaryBtn: 'Explore Packages',
      primaryLink: '#packages',
      secondaryBtn: 'Contact Us',
      secondaryLink: '#contact'
    },
    {
      image: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?q=80&w=2000',
      title: 'Hajj & Umrah',
      highlight: 'Made Easy',
      description: 'Complete packages with accommodation and travel coordination for your spiritual journey',
      primaryBtn: 'View Hajj Packages',
      primaryLink: '#hajj-umrah',
      secondaryBtn: 'Get Guidance',
      secondaryLink: '#contact'
    },
    {
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000',
      title: 'Visa Assistance',
      highlight: 'Simplified',
      description: 'Expert guidance and support for tourist and visit visa processing worldwide',
      primaryBtn: 'Check Visa Requirements',
      primaryLink: '#visa',
      secondaryBtn: 'Get Started',
      secondaryLink: '#contact'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          
          {/* Content */}
          <div className="relative h-full flex items-center z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className={`max-w-3xl transition-all duration-700 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  {slide.title}<br/>
                  <span className="text-blue-400">{slide.highlight}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={slide.primaryLink}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    {slide.primaryBtn}
                  </a>
                  <a 
                    href={slide.secondaryLink}
                    className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
                  >
                    {slide.secondaryBtn}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-blue-500/30 hover:bg-blue-500/70 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-blue-500/30 hover:bg-blue-500/70 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-32 md:bottom-40 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Search Box */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-20">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                From
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Departure city"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                To
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-500" />
                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Check In
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Check Out
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}