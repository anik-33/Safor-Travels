import React from "react";
import { MapPin, Clock, Star } from "lucide-react";

const TourPackageCard = ({ image, title, location, duration, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover"
        />
        <span className="absolute top-4 left-4 bg-[#1472b6] text-white text-sm px-3 py-1 rounded-full">
          Popular
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          <MapPin size={16} /> {location}
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <Clock size={16} /> {duration}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 mb-4">
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} />
          <span className="text-gray-500 text-sm ml-1">(4.0)</span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-[#0A3D62]">
            ৳ {price}
            <span className="text-sm font-normal text-gray-500"> /person</span>
          </p>

          <button className="bg-[#1278c0] text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-90 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourPackageCard;
