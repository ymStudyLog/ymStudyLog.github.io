import React from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Specbar from '../components/Specbar';

//start ~ deadline : term json-server로 구현 예정 -> 배포할 때 실패하면 그냥 하드코딩하기
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
  personalTask: [],
  teamTask: [
    'json-server, 코드 리팩토링, (동료 코드로)custom hook 스터디',
    '스터디를 바탕으로 전체 프로젝트 코드를 작성',
  ],
  lookBack: [
    '팀 프로젝트 진행시 분업의 중요성에 대해 생각해 볼 수 있었던 계기였다.',
    'json-server 라이브러리를 처음 알게 되어 지금은 가장 좋아하는 라이브러리 중 하나 되었다.',
  ],
};

const Projects = () => {
  const [projects, setProjects] = React.useState([]);
  const getProjects = async () => {
    const response = await axios.get('http://localhost:8000/projects');
    setProjects(response.data);
  };

  React.useEffect(() => {
    getProjects();
  }, []);

  return (
    <div name="projects" className="w-full h-screen">
      <div className="max-w-[1000px] h-full mx-auto pb-[20px] flex justify-center items-center flex-col">
        <div className="text-4xl font-bold border-b-4 mb-4 border-[#182848] mt-12">
          <h1>Projects</h1>
        </div>

        <div className="max-w-[450px] tablet:p-2 tablet:min-w-[700px] flex justify-between">
          <Specbar />
          <Card project={example} />
        </div>
        {/* {projects.map((project)=>{
            <div key={project.id} className="max-w-[450px] tablet:p-2 tablet:min-w-[700px]">
            <Card project={project}/>
            </div>
          })} */}
      </div>
    </div>
  );
};

export default Projects;
