import React from "react";
import AbtImg from "../assets/portfolio_icon.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <img
            src={AbtImg}
            alt="about_image"
            className="w-72 h-80 rounded object-cover mb-8 lg:mb-0"
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

            <div className="space-y-6"> 
              {/* Skill bar section */}
              {[
                { name: "HTML & CSS", width: "96%" },
                { name: "JavaScript", width: "97%" },
                { name: "Tailwind CSS", width: "94%" },
                { name: "React.js", width: "91%" },
                { name: "TypeScript", width: "83%" },
                { name: "Redux", width: "83%" },
                { name: "Next.js", width: "66%" },
              ].map((skill, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center lg:space-x-4 mb-6">
                  <label className="w-full lg:w-2/12 text-center mb-2 lg:mb-0">{skill.name}</label>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105"
                      style={{ width: skill.width }}
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
