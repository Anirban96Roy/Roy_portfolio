import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="py-16 scroll-mt-29 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16 "
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="w-full text-center md:text-left mt-2">

          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name with hover color change */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#DEE791] hover:text-[#FFD6BA] transition-colors duration-300 mb-4 leading-tight">
            Anirban Roy
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  'Student',
                  'Fullstack Developer',
                  'UI/UX Designer',
                  'Coder',
                  'Researcher',
                  'Writer'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          {/* About Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-500 mb-10 mt-8 leading-relaxed">
            Curious by nature and driven by research, I am passionate about exploring cutting-edge technologies. Specializing in web development and data-driven solutions, I aim to create impactful and innovative projects that make a difference.
          </p>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-7">
            <a
              href="https://github.com/Anirban96Roy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#EBFFD1]"
            >
              <FaGithub size={40} />
            </a>
                <a
                    href="https://www.facebook.com/anirban.roy.527936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#EBFFD1]"
                >
                  <FaFacebook size={40} />
                </a>
            <a
              href="https://www.linkedin.com/in/anirban-roy007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#EBFFD1]"
            >
              <FaLinkedin size={40} />
            </a>
            <a
               href="https://Wa.me/+8801632346677"
                 target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#EBFFD1]"
              >
              <FaWhatsapp size={40} />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
