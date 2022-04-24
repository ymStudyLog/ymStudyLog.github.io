import React from 'react';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center items-center">
        <h1 className="text-2xl">Simple application</h1>
        <h1 className="text-2xl">Better experience</h1>
        <h1 className="text-2xl">Keep upgrade</h1>
        <h2 className="my-2 text-4xl font-bold">
          프론트엔드 개발자 이유미의 포트폴리오입니다.
        </h2>
        <p>
          JavaScript와 ReactJS를 메인으로 사용하여 반응형 웹 애플리케이션
          구현하고 있습니다.
        </p>
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
