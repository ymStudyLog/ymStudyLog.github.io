import React from 'react';
import MovieApp from '../assets/movieapp.PNG';
import { HiLink, HiOutlineCode } from 'react-icons/hi';

const Work = () => {
  return (
    <div name="work" className="w-full h-screen">
      <div className="max-w-[1000px] h-full mx-auto flex justify-center items-center flex-col">
        <div className="text-4xl font-bold border-b-4 border-[#182848] mt-12">
          <h1>Work</h1>
        </div>

        <div className="max-w-[450px] flex flex-col mt-2 shadow-2xl tablet:p-2 tablet:min-w-[700px]">
          <div
            style={{ backgroundImage: `url(${MovieApp})` }}
            className="group container hidden tablet:min-w-[650px] tablet:min-h-[335px] mobile-extra:flex justify-center items-center flex-col project-img"
          >
            <div className="grid grid-cols-1 gap-5">
              <a
                href="http://52.78.78.39:4000/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="opacity-0 group-hover:opacity-100 flex items-center p-4 text-xl font-bold rounded-full text-[#182848] bg-white">
                  Go to the page &nbsp;&nbsp; <HiLink />
                </button>
              </a>
              <a href="https://github.com/ymStudyLog/movie_2021_front">
                <button className="opacity-0 group-hover:opacity-100 flex items-center p-4 text-xl font-bold rounded-full text-[#182848] bg-white">
                  View the code &nbsp;&nbsp; <HiOutlineCode />
                </button>
              </a>
            </div>
          </div>

          <h1 className="text-lg font-bold p-1">
            First project : movieapp - 영화 평점 웹서비스(넷플릭스 UI 모방)
          </h1>
          <p className='p-1'>Skills : React.js, Redux, MongoDB, Node.js, styled-components</p>
          <p className='p-1'>Deploy: AWS EC2</p>
          <div className="flex justify-around p-2 mobile-extra:hidden">
              <a
                href="http://52.78.78.39:4000/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex items-center py-3 px-5 text-lg font-bold rounded-full bg-[#182848] text-white">
                  <HiLink />
                </button>
              </a>
              <a href="https://github.com/ymStudyLog/movie_2021_front">
                <button className="flex items-center py-3 px-5 text-lg font-bold rounded-full bg-[#182848] text-white">
                  <HiOutlineCode />
                </button>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
