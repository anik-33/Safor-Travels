import React from "react";
import { MapPin, Clock, Star } from "lucide-react";

const TopDestinationCard = ({ image, location, duration, price }) => {
  return (
    <div className="bg-white  rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={location}
          className="w-full h-[400px] object-cover"
        />
       
      </div>

      {/* Content */}
      <div className="p-5">
        {/* <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3> */}

        <div className="flex justify-between items-center gap-2 text-gray-500 text-sm mb-2">
          <p className="flex gap-2"><MapPin size={16} /> {location}</p>
          <p className="text-lg font-bold text-[#0A3D62]">
            $ {price}
            
          </p>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <Clock size={16} /> {duration}
        </div>
       

          
        
      </div>
    </div>
  );
};

export default TopDestinationCard;
