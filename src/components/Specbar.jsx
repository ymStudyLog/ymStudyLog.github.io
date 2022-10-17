import React from 'react';

const Specbar = ({ spec }) => {
  return (
    <div className="max-w-[60px] px-1 gap-3 flex flex-col justify-center items-center bg-slate-200 rounded-tl-lg rounded-bl-lg">
      {spec?.map((item, index) => {
        return (
          <div key={index} className="min-h-[40px] px-1 bg-[#182848] rounded-lg flex justify-center items-center text-sm text-white break-all">
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Specbar;
