import React from "react";
import todoImage from "../assets/todoImage.png";
import convImage from "../assets/convImage.jpg";
import codeVibe from "../assets/codeVibe.jpg"
import sudokuImg from "../assets/sudokuImg.png";

const projects = [
  
  {
    id: 1,
    name: "To-do App",
    technologies: "HTML, CSS, JS",
    image: todoImage,
    url: "https://dynamic-todo-app-t0nias-projects.vercel.app/",
  },
  {
    id: 2,
    name: "Sudoku Game",
    technologies: "Next.js, TypeScript, Tailwind",
    image: sudokuImg,
    url: "https://sudoku-game-drab.vercel.app/",
  },
  {
    id: 3,
    name: "Currency Converter",
    technologies: "React.js, Tailwind CSS",
    image: convImage,
    url: "https://basic-currency-converter.vercel.app/",
  },
  {
    id: 4,
    name: "E-school Landing Page",
    technologies: "React Vite, Tailwind, Framer Motion",
    image: codeVibe,
    url: "https://codevibe-t0nias-projects.vercel.app/",
  }, 
 
  // {
  //   id: 5,
  //   name: "Another Project",
  //   technologies: "React.js, Tailwind CSS",
  //   image: todoImage,
  //   url: "https://www.bbb.com",
  // },
  // {
  //   id: 6,
  //   name: "Sample Project",
  //   technologies: "HTML, CSS, JavaScript",
  //   image: todoImage,
  //   url: "https://www.bbb.com",
  // },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.url}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/T0nia"
            target="_blank" 
            className="text-green-400 hover:text-green-500 text-xl font-semibold"
          >
            See More Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
