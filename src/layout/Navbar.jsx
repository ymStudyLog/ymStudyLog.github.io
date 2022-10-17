import React, { useState } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsGithub, BsList, BsXLg } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const onhandleClick = () => setNav(!nav);

  return (
    <div className="fixed w-[96%] h-[80px] font-bold px-8 flex justify-between items-center rounded-3xl z-10">
      <div className="inline-block text-3xl">YM</div>

      {/* Hamburger & close */}
      <div
        onClick={onhandleClick}
        className="tablet:hidden cursor-pointer z-10"
      >
        {nav ? <BsXLg size={30} /> : <BsList size={40} />}
      </div>

      {/* Mobile menu */}
      <div
        className={
          nav
            ? 'absolute top-0 left-0 w-full h-[95vh] rounded-3xl bg-white flex justify-center items-center'
            : 'hidden'
        }
      >
        <ul className="flex flex-col text-center">
          <Link
            onClick={onhandleClick}
            to="home"
            smooth={true}
            duration={500}
            offset={-20}
          >
            <li className="text-3xl mx-2 my-4 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150">
              Home
            </li>
          </Link>
          <Link
            onClick={onhandleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            <li className="my-4 text-3xl mx-2 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150">
              Projects
            </li>
          </Link>
          <Link
            onClick={onhandleClick}
            to="comment"
            smooth={true}
            duration={500}
            offset={20}
          >
            <li className="my-4 text-3xl mx-2 hover:border-[#182848] hover:bg-[#182848] hover:text-white duration-150">
              Comment
            </li>
          </Link>
          <a
            href="https://github.com/ymStudyLog"
            className="flex hover:scale-125 duration-200"
          >
            <button className="rounded-full mx-auto my-3">
              <BsGithub size={40} className="hover:text-[#182848]" />
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
