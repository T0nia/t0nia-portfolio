import React from 'react';
import HeroImg from '../assets/Hero-img.jpg';

const Home = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img 
        src={HeroImg} 
        alt="my_image" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105' 
      />

      <h1 className='text-4xl font-bold'> {" "}
        <span className='text-transparent bg-clip-text bg-blue-500 '>
          Anthonia Edokah</span>
        , Frontend Engineer    
      </h1>

      <p className='mt-4 text-lg text-gray-300'>
        I build modern and responsive web applications.
      </p>

      <div className='mt-8 space-x-4'>
      
        <a 
          href="https://drive.google.com/file/d/1nj0jGzwrlbKq2SEkxcL6Y3fqMuk0HNQ3/view?usp=drivesdk" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='bg-gradient-to-r from-purple-500 to-pink-700 text-white inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          View Resume
        </a>
      </div>
    </div>
  )
}

export default Home;
