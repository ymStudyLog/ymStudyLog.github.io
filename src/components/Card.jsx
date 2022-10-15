import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';

//start ~ deadline : term json-server로 구현 예정
const example = {
  id: 1,
  title: '인스타그램 클론 코딩 프로젝트 리팩토링',
  achievement: '',
  start: '2022-07-04',
  deadline: '2022-07-06',
  repository: 'https://github.com/ymStudyLog/wanted-pre-onboarding-fe',
  organization:
    'https://github.com/Wanted-Pre-Onboarding-FE-Team5/pre-assginment-refactoring',
  spec: 'JavaScript, React, styled-components',
  part: [
    'json-server 라이브러리, 동료의 코드를 보며 custom hook에 대해 스터디를 진행하여 코드를 다같이 짜봄',
  ],
};

const Card = () => {
  return (
    <div className="h-[350px]">
      <span>assignment {example.id}</span>
      <div className="my-6 flex justify-between">
        <span className="text-xl font-bold">{example.title}</span>
        <div className="flex w-[80px] justify-between">
          <a href={example.repository}>
            <BsGithub size={30} />
          </a>
          <a href={example.organization}>
            <RiTeamFill size={30} />
          </a>
        </div>
      </div>
      <p>성과 : {example.achievement}</p>
      <p>
        기간 : {example.start} ~ {example.deadline}
      </p>
      <p>스팩 : {example.spec}</p>
      <div>
        <span>담당 파트 :</span>
        {example.part?.map((task, index) => {
          return <p key={index}>{task}</p>;
        })}
      </div>
    </div>
  );
};

export default Card;
