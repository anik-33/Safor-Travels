import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Required styles
import { Carousel } from 'react-responsive-carousel';

const SponsoredCarousel = () => {
  // Example sponsor company names
  const sponsors = [
    { name: '✈ Bangladesh Airlines',  },
    { name: '✈ Quatar Airlines', },
    { name: '🏰 Hotel Grand Park', },
    { name: '🔌 Tycoon Hi-Tech Park' },
    
  ]
  return (
    <section className=" max-w-11/12 mx-auto my-12 p-6  rounded shadow text-center">
      <h2 className="text-3xl font-bold mb-4 text-primary">Our Sponsors</h2>
      <div className="overflow-hidden whitespace-nowrap border-y-2 border-primary py-4  relative">
        <div
          className="inline-block animate-scroll-ticker text-lg font-semibold text-secondary"
          style={{ animation: 'scroll-ticker 20s linear infinite' }}
        >
          {sponsors.concat(sponsors).map((sponsor, idx) => (
            <span key={idx} className="mx-8 inline-flex items-center gap-2">
              
              {sponsor.name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
                @keyframes scroll-ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
    </section>
  );
};

export default SponsoredCarousel;