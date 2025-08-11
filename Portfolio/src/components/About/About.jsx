import React from 'react';
import profileImage from '../../assets/anirban_project/a.jpg'; // Update the filename accordingly

const About = () => {
  return (
    <section id="about" className="w-full scroll-mt-29 bg-[#A3DC9A] py-16 px-4 md:px-12 border-t">
      <div className="max-w-6xl mx-auto border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">

          {/* Left: Text Section */}
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-[#A3DC9A]">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I am Anirban, pursuing a Bachelor’s degree in Computer Science and Engineering at Khulna University of Engineering & Technology (KUET). Driven by curiosity and a strong desire to tackle challenges, I focus on applying Artificial Intelligence and Machine Learning to develop meaningful and ethical solutions for real-world problems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond my academic pursuits, I have a passion for traveling and exploring nature, with a goal to experience diverse cultures worldwide. A food lover at heart, I also dedicate my free time to discovering new technologies and staying abreast of the latest innovations in the tech industry.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[2px] bg-gray-300"></div>

          {/* Right: Image Section */}
          <div className="md:w-1/2 w-full flex items-center justify-center bg-white">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
              style={{ maxHeight: '500px' }}
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
