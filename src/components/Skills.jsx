import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import NodeJS from '../assets/node.png';
import MongoDB from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center items-center">
        <div className="text-4xl font-bold border-b-4 border-[#182848]">
          <h1>Skills</h1>
        </div>

        {/* images */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 justify-center items-center ">
          <div className="text-center py-4 px-6 rounded-2xl shadow-xl bg-[#182848] hover:scale-110 duration-150">
            <img src={HTML} alt="HTML img" className="w-[50px] mx-auto" />
            <p className="text-lg mt-2 text-white cursor-default">HTML</p>
          </div>
          <div className="text-center py-4 px-6 rounded-2xl shadow-xl bg-[#182848] hover:scale-110 duration-150">
            <img src={CSS} alt="HTML img" className="w-[50px] mx-auto" />
            <p className="text-lg mt-2 text-white cursor-default">CSS</p>
          </div>
          <div className="text-center py-4 px-6 rounded-2xl shadow-xl bg-[#182848] hover:scale-110 duration-150">
            <img src={JavaScript} alt="HTML img" className="w-[50px] mx-auto" />
            <p className="text-lg mt-2 text-white cursor-default">JavaScript</p>
          </div>
          <div className="text-center py-4 px-6 rounded-2xl shadow-xl bg-[#182848] hover:scale-110 duration-150">
            <img src={ReactImg} alt="HTML img" className="w-[50px] mx-auto" />
            <p className="text-lg mt-2 text-white cursor-default">React</p>
          </div>
          <div className="text-center py-4 px-6 rounded-2xl shadow-xl bg-[#182848] hover:scale-110 duration-150">
            <img src={Github} alt="HTML img" className="w-[50px] mx-auto" />
            <p className="text-lg mt-2 text-white cursor-default">Github</p>
          </div>
          <div className="text-center py-4 px-6 rounded-2xl shadow-xl bg-[#182848] hover:scale-110 duration-150">
            <img src={Tailwind} alt="HTML img" className="w-[50px] mx-auto" />
            <p className="text-lg mt-2 text-white cursor-default">Tailwindcss</p>
          </div>
          <div className="text-center py-4 px-6 rounded-2xl shadow-xl bg-[#182848] hover:scale-110 duration-150">
            <img src={NodeJS} alt="HTML img" className="w-[50px] mx-auto" />
            <p className="text-lg mt-2 text-white cursor-default">NodeJS</p>
          </div>
          <div className="text-center py-4 px-6 rounded-2xl shadow-xl bg-[#182848] hover:scale-110 duration-150">
            <img src={MongoDB} alt="HTML img" className="w-[50px] mx-auto" />
            <p className="text-lg mt-2 text-white cursor-default">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
