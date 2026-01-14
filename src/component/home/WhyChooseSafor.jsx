import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Target, Eye } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseSafor = () => {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-blue-500 mb-4">
            Why Choose Safor Travels?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted travel partner delivering reliable, affordable,
            and personalized travel solutions.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            "Customer-focused service approach",
            "Affordable and transparent pricing",
            "Professional travel guidance",
            "Reliable support before and during travel",
            "Commitment to quality and trust",
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex gap-4 bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <CheckCircle className="text-blue-500 mt-1" size={24} />
              <p className="text-gray-700 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-blue-500" size={30} />
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To deliver dependable travel services that simplify journeys
              and create positive travel experiences for our clients.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-blue-500" size={30} />
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted and recognized travel service provider
              in Bangladesh by maintaining integrity, service excellence,
              and customer satisfaction.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSafor;
