import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      location: "Bali, Indonesia",
      text: "The itinerary was perfectly balanced between adventure and relaxation. Seeing the sunrise over Mt. Batur was a life-changing experience. I couldn't have asked for a better organized trip.",
      author: "Julianne Moore",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=julianne"
    },
    {
      id: 2,
      location: "Swiss Alps",
      text: "Everything was handled for us seamlessly. The mountain resorts were top-tier and the views were breathtaking. A truly stress-free vacation.",
      author: "David Chen",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=david"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-blue-500">
            Trusted by <span className="font-serif italic">thousands</span> of travelers
          </h2>
        </div>

        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          className="clean-carousel"
        >
          {reviews.map((review) => (
            <div key={review.id} className="pb-16">
              <div className="flex flex-col items-center text-center">
                
                {/* Star Rating */}
                <div className="flex space-x-1 mb-8 text-orange-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed mb-10 max-w-2xl">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <img 
                    src={review.avatar} 
                    alt={review.author} 
                    className="w-10 h-20 rounded-full mb-4 border-2 border-orange-100 p-1"
                  />
                  <h4 className="text-gray-900 font-bold text-lg tracking-wide">
                    {review.author}
                  </h4>
                  <p className="text-orange-600 text-sm font-semibold uppercase tracking-widest mt-1">
                    {review.location}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;