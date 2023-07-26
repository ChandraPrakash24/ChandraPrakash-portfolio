import React, { useState } from 'react';
import Skills from '../Skills/Skills';

function About() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ['Web Devloper', 'Programmer', 'Enthusiast', 'Code Sorcerer', 'Algorithm Wrangler', 'Binary Whisperer', 'Bug Hunter', 'Syntax Jedi', 'Tech Alchemist', 'Logic Ninja', 'Data Wizard', 'Pixel Artisan', 'Quantum Encoder', 'Cyber Samurai', 'API Magician', 'Kernel Guru', 'Blockchain Wizard', 'AI Tamer', 'Cloud Whisperer', 'Robotics Maestro', 'Recursive Dreamer','Cybernetic Samurai', 'Machine Learning Magician',
  'Cybernetic Samurai',
  'Blockchain Enchanter',
  'Algorithmic Maestro',
  'Cloud Sorceress',
  'Virtual Reality Artisan',
  'AR Wizard',
  'Automation Mastermind',
  'Scripting Guru',
  'Binary Sorcerer',
  'Encryption Wizard',
  'Kernel Hacker',
  'Command Line Ninja',
  'API Sorceress',
  'Quantum Codebreaker',
  'Data Science Guru',
  'DevOps Warlock',
  'Game Development Maestro',
  'Embedded Systems Tinkerer',
  'Backend Wizard',
  'Frontend Enchanter',
  'Network Sorcerer',
  'Cybersecurity Guardian',
  'Tech Prophet',
  'Algorithm Whisperer',
  'Full Stack Alchemist',
  'Cloud Architect',
  'Robotics Visionary',
  'Database Guru',
  'Agile Sorcerer',
  'Code Artisan',
  'Neural Network Mage',
  'Compiler Connoisseur',
  '3D Visualization Guru',
  'Firmware Magician',
  'Ethical Hacker',
  'Code Archaeologist',
  'Big Data Wrangler',
  'Internet of Things Master',
  'Augmented Reality Artificer',
  'Virtual Assistant Conjurer',
  'Blockchain Cryptomancer',
  'Quantum Computing Prodigy',
  'Backend Sorcerer',
  'Frontend Enigma',
  'Data Analysis Oracle',
  'Cybersecurity Maestro',
  'Cloud Migration Specialist',
  'Embedded Systems Guru',
  'UI/UX Visionary',
  'Full Stack Alchemist',
  'API Ninja',
  'DevOps Enchanter',
  'Game Development Architect',
  'Network Sorceress',
  'Machine Learning Conjurer',
  'Cybersecurity Ninja',
  'Data Science Maven',
  'Code Whisperer',
  'Blockchain Enigma',
  'Algorithmic Sorcerer',
  'Cloud Architect',
  'Robotics Guru',
  'Database Wizard',
  'Agile Enchanter',
  'Code Artificer',
  'Neural Network Magician',
  'Compiler Sage',
  '3D Visualization Maestro',
  'Firmware Whisperer',
  'Ethical Hacker',
  'Code Archaeologist',
  'Big Data Alchemist',
  'IoT Mastermind',
  'Augmented Reality Sorceress',
  'Virtual Assistant Enthusiast',
  'Blockchain Cryptomancer',
  'Quantum Computing Prodigy',
  'Backend Alchemist',
  'Frontend Enigma',
  'Data Analysis Oracle',
  'Cybersecurity Maestro',
  'Cloud Migration Specialist',
  'Embedded Systems Guru'];


  const handleTitleChange = () => {
    setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-6 p-5">
        <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-extrabold text-3xl md:text-4xl  mb-1 text-black dark:text-white">
              <span
                className="text-animation"
                onMouseEnter={handleTitleChange}
                onMouseLeave={handleTitleChange}
              >
                Chandra Prakash
              </span>
            </h1>
            <h2 className="tracking-wide text-gray-700 dark:text-gray-200 mb-4">
              I'am <span className="font-semibold">{titles[titleIndex]}</span>
            </h2>
            <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16">
              Hey, I'm a Frontend Developer at Company. I enjoy working with React Js and crafting beautiful front-end
              experiences.
            </p>
          </div>
          <div className="w-[80px] sm:w-[206px] relative mb-8 sm:mb-0 mx-auto sm:mr-auto">
            <img
              src="https://chandraprakash24.github.io/cvok/img/profile-pic2.png"
              alt="avatar"
              title="avatar"
              className="rounded-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div>
          <h1 className="font-bold text-2xl md:text-2xl mb-1 text-black dark:text-white">About Me</h1>
          <p className="tracking-wide text-gray-600 dark:text-gray-400 mb-16">
            I am a passionate and dedicated web developer with a strong focus on creating engaging and user-friendly
            websites. I have a deep understanding of web technologies and a keen eye for design. My goal is to bring
            ideas to life through elegant and functional solutions.
          </p>
        </div>
        <Skills />
      </div>
    </>
  );
}

export default About;
