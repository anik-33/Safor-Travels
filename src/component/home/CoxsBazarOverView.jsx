import React from "react";

const CoxsBazarOverView = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.pinimg.com/1200x/5b/9e/a5/5b9ea56e7bffe423de995c3fce42c40f.jpg"
            alt="Cox's Bazar Beach"
            className="w-full h-[320px]  rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold text-[#0A3D62] mb-4">
            Cox’s Bazar
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Life, love, and the pursuit of the next beach trip. Cox’s Bazar,
            the longest natural sea beach in the world, offers breathtaking
            views, soothing waves, and unforgettable travel experiences.
          </p>

          <button className="bg-[#0A3D62] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition">
            Explore Tour Packages
          </button>
        </div>

      </div>
    </section>
  );
};

export default CoxsBazarOverView;
