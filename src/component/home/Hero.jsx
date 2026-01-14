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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[95vh] md:h-[95vh] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 md:bg-gradient-to-r md:from-black/80 md:to-transparent"></div>

          {/* Content */}
          <div className="relative h-full flex sm:items-start md:items-center z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-40 md:py-0">
              <div className={`max-w-3xl transition-all duration-1000 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  {slide.title}<br />
                  <span className="text-blue-400">{slide.highlight}</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-6 md:mb-10 leading-relaxed max-w-2xl">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={slide.primaryLink}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-center font-bold transition-all shadow-lg transform active:scale-95"
                  >
                    {slide.primaryBtn}
                  </a>
                  <a
                    href={slide.secondaryLink}
                    className="backdrop-blur-md border-2 border-white/30 hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-xl text-center font-bold transition-all"
                  >
                    {slide.secondaryBtn}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Hidden on mobile for better UX */}
      <div className="hidden md:block">
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Pagination Dots - Moved up slightly on mobile */}
      <div className="absolute bottom-10 md:bottom-44 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 transition-all rounded-full ${index === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/40 w-2'
              }`}
          />
        ))}
      </div>

      {/* Search Box - Responsive Grid */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-40 transform translate-y-1/2 md:translate-y-0 mb-55 md:mb-8">
        <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Departure" className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">To</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-blue-500" />
                <input type="text" placeholder="Destination" className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Check In</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input type="date" className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">Check Out</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input type="date" className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-700" />
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-[52px] rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}