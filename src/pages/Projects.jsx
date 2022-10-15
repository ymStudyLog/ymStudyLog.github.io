import React from 'react';
import Card from '../components/Card';

const Projects = () => {
  return (
    <div name="projects" className="w-full h-screen">
      <div className="max-w-[1000px] h-full mx-auto pb-[20px] flex justify-center items-center flex-col">
        <div className="text-4xl font-bold border-b-4 mb-4 border-[#182848] mt-12">
          <h1>Projects</h1>
        </div>

        <div className="max-w-[450px] tablet:p-2 tablet:min-w-[700px]">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Projects;
