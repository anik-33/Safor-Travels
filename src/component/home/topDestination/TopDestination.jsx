import React from 'react';
import TopDestinationCard from './TopDestinationCard';

const TopDestination = () => {
      const packages = [
    {
      
      location: "Malaysia",
      duration: "3 Days / 2 Nights",
      price: "12,999",
      image:
        "https://i.pinimg.com/1200x/d6/16/ab/d616ab8b6adbec2a3702e4fe5a0dc906.jpg",
    },
    {
      
      location: "Nepal",
      duration: "2 Days / 1 Night",
      price: "9,999",
      image:
        "https://i.pinimg.com/736x/ab/f8/61/abf861d1dc8ddd760cd7b36091f77a03.jpg",
    },
    {
      
      location: "Full Europe",
      duration: "4 Days / 3 Nights",
      price: "18,999",
      image:
        "https://i.pinimg.com/736x/e3/de/12/e3de12c2fbbbec723505d8ac1605867f.jpg",
    },
  ];
    return (
   <section className="max-w-7xl mx-auto px-4 py-16 sm:mt-10">
         
         {/* Section Header */}
         <div className="text-center mb-12">
           <h2 className="text-4xl font-bold text-blue-500 mb-3">
             Top Destination
           </h2>
           
         </div>
   
         {/* Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {packages.map((pkg, index) => (
             <TopDestinationCard key={index} {...pkg} />
           ))}
         </div>
       </section>
    );
};

export default TopDestination;