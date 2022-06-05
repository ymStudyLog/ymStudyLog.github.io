import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';
import TopButton from './common/TopButton';
//import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const onhandleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] font-bold px-8 flex justify-between items-center">
      <div>
        <p className="inline-block text-3xl">YM</p>
      </div>

      {/* menu */}
      <ul className="hidden md:flex text-2xl">
        <Link to="home" smooth={true} duration={500}>
          <li className="mx-2 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150">
            Home
          </li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li className="mx-2 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150">
            Skills
          </li>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <li className="mx-2 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150">
            Work
          </li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li className="mx-2 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150">
            Contact
          </li>
        </Link>
      </ul>

      {/* Hamburger & close */}
      <div onClick={onhandleClick} className="md:hidden cursor-pointer z-10">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          nav
            ? 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'
            : 'hidden'
        }
      >
        <Link onClick={onhandleClick} to="home" smooth={true} duration={500}>
          <li className="my-4 text-3xl mx-2 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150">
            Home
          </li>
        </Link>
        <Link onClick={onhandleClick} to="skills" smooth={true} duration={500}>
          <li className="my-4 text-3xl mx-2 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150">
            Skills
          </li>
        </Link>
        <Link onClick={onhandleClick} to="work" smooth={true} duration={500}>
          <li className="my-4 text-3xl mx-2 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150">
            Work
          </li>
        </Link>
        <Link onClick={onhandleClick} to="contact" smooth={true} duration={500}>
          <li className="my-4 text-3xl mx-2 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150">
            Contact
          </li>
        </Link>
        <button className="rounded-full flex items-center m-4 hover:scale-125 duration-150">
          <a href="https://github.com/ymStudyLog">
            <FaGithub size={35} />
          </a>
        </button>
      </ul>

      {/* side button */}
      <div className="hidden md:flex fixed left-0 top-[50%] flex-col ">
        <ul>
          <li className="w-[180px] h-[50px] rounded-tl-none rounded-bl-none text-2xl flex text-white bg-[#182848] ml-[-120px] hover:ml-[-10px] duration-500">
            <a
              href="https://github.com/ymStudyLog"
              className="w-full flex justify-between items-center font-normal"
            >
              Github <FaGithub />
            </a>
          </li>
          {/* 
          <li className="w-[180px] h-[50px] rounded-tl-none rounded-bl-none text-2xl flex text-white bg-[#182848] ml-[-120px] hover:ml-[-10px] duration-500 mt-2">
            <button
              onClick={() => console.log('email-link-popup')}
              className="w-full flex justify-between items-center"
            >
              Email <HiOutlineMail />
            </button>
          </li>
          */}
        </ul>
      </div>

      {/* Top button */}
      {nav ? null : <TopButton />}
    </div>
  );
};

export default Navbar;
