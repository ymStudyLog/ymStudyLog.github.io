import React from 'react';
import Specbar from './Specbar';
import { BsGithub, BsFileText } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';

const Card = (props) => {
  const { project } = props;

  return (
    <div className="max-w-[900px] flex gap-x-2 leading-relaxed rounded-lg border-2 border-[#182848]">
      <Specbar spec={project.spec} />
      <div className="p-2">
        <div className="flex justify-between">
          <span className="font-bold">assignment {project.id}</span>
          <div className="w-[140px] flex justify-between">
            <a
              href={project.readme}
              target="_blank"
              rel="noreferrer"
              title="readme"
            >
              <BsFileText size={30} />
            </a>
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              title="개인 repository"
            >
              <BsGithub size={30} />
            </a>
            <a
              href={project.organization}
              target="_blank"
              rel="noreferrer"
              title="organization repository"
            >
              <RiTeamFill size={30} />
            </a>
          </div>
        </div>
        <p className="text-xl font-bold">{project.title}</p>
        <p>
          <span className="font-bold">성과 : </span> {project.achievement}
        </p>
        <p>
          <span className="font-bold">기간 : </span>
          {project.start} ~ {project.deadline}
        </p>
        <p className="font-bold">담당 파트 : </p>
        <ul className="list-disc list-inside">
          {project.personalTask?.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
        <p className="font-bold">공통 파트 :</p>
        <ul className="list-disc list-inside">
          {project.teamTask?.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
        <p className="font-bold">회고 :</p>
        <ul className="list-disc list-inside">
          {project.lookBack?.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
