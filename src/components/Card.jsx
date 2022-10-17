import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';

const Card = (props) => {
  const { project } = props;

  return (
    <div className="h-[350px]">
      <span>assignment {project.id}</span>
      <div className="my-6 flex justify-between">
        <span className="text-xl font-bold">{project.title}</span>
        <div className="flex w-[80px] justify-between">
          <a href={project.repository}>
            <BsGithub size={30} />
          </a>
          <a href={project.organization}>
            <RiTeamFill size={30} />
          </a>
        </div>
      </div>
      <p>성과 : {project.achievement}</p>
      <p>
        기간 : {project.start} ~ {project.deadline}
      </p>
      <p>스팩 : {project.spec}</p>
      <div>
        <span>담당 파트 :</span>
        {project.personalTask?.map((task, index) => {
          return <p key={index}>{task}</p>;
        })}
      </div>
      <div>
        <span>공통 파트 :</span>
        {project.teamTask?.map((task, index) => {
          return <p key={index}>{task}</p>;
        })}
      </div>
      <div>
        <span>회고 :</span>
        {project.lookBack?.map((task, index) => {
          return <p key={index}>{task}</p>;
        })}
      </div>
    </div>
  );
};

export default Card;
