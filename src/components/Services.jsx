
import React from "react";

const services = [
  {
    // id: 1,
    title: "Web Design",
    description: "Creating beautiful and user-friendly web pages."
  },
  {
    // id: 2,
    title: "Frontend Development",
    description: "Creating interactive user interfaces for all types of devices."
  },
  {
    // id: 3,
    title: "Technical Writing",
    description: "Using the right words to simplify complex technial concepts.",
  },
  {
    // id: 4,
    title: "Freelancing",
    description: "Providing my skills and services on project-by-project basis.",
  },
  {
    // id: 5,
    title: "Collaboration",
    description: "Partnering with individuals and organizations to build projects.",
  },
  {
    // id: 6,
    title: "Coaching",
    description: "One-on-one coding sessions with web development beginners.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-10" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-gray-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-500 to-pink-400">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;