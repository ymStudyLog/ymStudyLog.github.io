import React from 'react';
import MovieApp from '../assets/movieapp.PNG';
import { HiLink, HiOutlineCode } from 'react-icons/hi';

const Work = () => {
  return (
    <div name="work" className="w-full h-screen">
      <div className="max-w-[1000px] h-full mx-auto flex justify-center items-center flex-col">
        <div className="text-4xl font-bold border-b-4 border-[#182848] mt-12">
          <h1>Works</h1>
        </div>

        <div className="max-w-[850px] flex flex-col p-2 mt-2 shadow-2xl">
          <div
            style={{ backgroundImage: `url(${MovieApp})` }}
            className="group container md:min-w-[700px] md:min-h-[335px] flex justify-center items-center flex-col project-img"
          >
            <a href='/'> 
              <button className="opacity-0 group-hover:opacity-100 flex items-center mb-6 p-4 text-xl font-bold rounded-full text-[#182848] bg-white">
                Go to the page &nbsp;&nbsp; <HiLink />
              </button>
            </a>
            <a href='https://github.com/ymStudyLog/movie_2021'>
              <button className="opacity-0 group-hover:opacity-100 flex items-center p-4 text-xl font-bold rounded-full text-[#182848] bg-white">
                View the code &nbsp;&nbsp; <HiOutlineCode />
              </button>
            </a>
          </div>

          <h1 className="text-lg font-bold">
            First project : movieapp - 영화 평점 웹서비스(넷플릭스 UI 모방)
          </h1>
          <p>Skill stacks : React.js, Redux, MongoDB, Node.js, styled-components</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
