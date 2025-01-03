import React from "react";
import AboutImage from "../assets/Hero-img.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="about_image"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />

          <div className="flex-1">
            <p className="text-lg mb-8">
              With a talent for crafting intuitive user interfaces and smooth
              user experiences, I focus on writing clean, maintainable code that
              drives performance and scalability. Trained at ALX Africa, I have
              a solid foundation in modern web development. Whether working
              independently or collaborating with teams, I strive to create
              innovative solutions that ensure websites and apps are fast,
              accessible, and visually appealing.
            </p>

            <div className="space-y-4">
              {/* Skill bar sections */}
              {[
                { name: "HTML & CSS", width: "11/12" },
                { name: "JavaScript", width: "11/12" },
                { name: "Tailwind CSS", width: "11/12" },
                { name: "React.js", width: "11/12" },
                { name: "TypeScript", width: "10/12" },
                { name: "Redux", width: "10/12" },
                { name: "Next.js", width: "9/12" },
              ].map((skill, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center md:space-x-4">
                  <label className="w-full md:w-2/12 text-center">{skill.name}</label>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-${skill.width}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  3
                </h3>
                <p>Months Experience</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
