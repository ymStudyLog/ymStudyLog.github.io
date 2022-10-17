import React from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';

const TopButton = () => {
  return (
    <div className="text-white text-xl w-auto flex mt-4">
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <BsArrowUpCircle size={30} />
      </button>
    </div>
  );
};

export default TopButton;