import React from 'react';

const TopButton = () => {
  return (
    <div className='fixed right-[3%] bottom-[5%] rounded-full bg-[#182848] text-white hover:scale-110 duration-150'> 
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
      className="w-[60px] h-[60px] text-xl font-bold" 
    >
      Top
    </button>
    </div>
  );
};

export default TopButton;