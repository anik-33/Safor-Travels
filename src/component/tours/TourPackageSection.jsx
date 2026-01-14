import React from "react";
import TourPackageCard from "./TourPackageCard";


const TourPackageSection = () => {
  const packages = [
    {
      title: "Cox’s Bazar Beach Tour",
      location: "Cox’s Bazar, Bangladesh",
      duration: "3 Days / 2 Nights",
      price: "12,999",
      image:
        "https://i.pinimg.com/1200x/5b/9e/a5/5b9ea56e7bffe423de995c3fce42c40f.jpg",
    },
    {
      title: "Sundarbans Adventure Tour",
      location: "Khulna, Bangladesh",
      duration: "2 Days / 1 Night",
      price: "9,999",
      image:
        "https://i.ibb.co.com/4w4YwQc0/River-in-Sundarban.jpg",
    },
    {
      title: "Kolkata City Tour",
      location: "Kolkata, India",
      duration: "4 Days / 3 Nights",
      price: "18,999",
      image:
        "https://i.ibb.co.com/bf4TGry/image-processing20181021-4-kwymfa.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:mt-10">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-500 mb-3">
          Popular Tour Packages
        </h2>
        <p className="text-gray-600">
          Choose from our carefully crafted domestic and international tours
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <TourPackageCard key={index} {...pkg} />
        ))}
      </div>
    </section>
  );
};

export default TourPackageSection;
