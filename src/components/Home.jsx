import React, { useState, useEffect } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FiCopy } from 'react-icons/fi';
import { FcCheckmark } from 'react-icons/fc';

const Home = () => {
  const [copy, setCopy] = useState(false);
  const onhandleClick = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopy(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  }, [copy]);

  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center items-center">
        <h1 className="text-2xl">
          Aim to build simple applications and deliver a better experience
        </h1>
        <h1 className="my-3 text-4xl font-bold">
          프론트엔드 개발자 이유미의 포트폴리오입니다.
        </h1>
        <div className="text-xl flex items-center mt-3">
          <HiOutlineMail size={30} className="mr-2 sm:m-0" />
          <span className="hidden sm:inline mr-2 ml-2">ylee585@gmail.com</span>
          <FiCopy
            className="cursor-pointer mr-2"
            onClick={() => {
              onhandleClick('ylee585@gmail.com');
            }}
          />
          {copy && <FcCheckmark size={25} />}
        </div>
        <div className="mt-5">
          <button
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }}
            className="p-3 rounded-md border-2 border-[#182848] font-bold hover:text-white hover:bg-[#182848] duration-150"
          >
            둘러보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
