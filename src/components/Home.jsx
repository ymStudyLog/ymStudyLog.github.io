import React from 'react';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center items-center">
        <h1 className="text-2xl">Aim to build simple applications and deliver a better experience</h1>
        <h1 className="my-3 text-4xl font-bold">
          프론트엔드 개발자 이유미의 포트폴리오입니다.
        </h1>
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
