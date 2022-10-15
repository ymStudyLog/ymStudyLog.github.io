import React from 'react';
import { Link } from 'react-scroll';
import { BsJournals, BsGithub, BsHouseDoor } from 'react-icons/bs';
import { GoComment } from 'react-icons/go';
import TopButton from './TopButton';

//리모콘 메뉴를 고정하게 하는 기능도 구현하기
const Sidebar = () => {
  const [isOpenFull, setIsOpenFull] = React.useState(false);
  const [isFixed, setIsFixed] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState({
    home: false,
    projects: false,
    comment: false,
  });

  const tempFix = (props) => {
    return props
      ? `hidden tablet:flex w-[200px] flex-col items-start justify-center px-6 py-10 fixed top-[30%] right-0 mr-[15px] bg-[#182848] rounded-3xl`
      : `hidden tablet:flex w-[200px] flex-col items-start justify-center px-6 py-10 fixed top-[30%] right-0 mr-[-130px] hover:mr-[15px] duration-500 bg-[#182848] rounded-3xl`;
  };

  const tempColor = (props) => {
    return props
      ? `mb-4 flex text-red-500 w-auto cursor-pointer`
      : `mb-4 flex text-white w-auto cursor-pointer`;
  };

  //사이드바 전체에 onMouseOver를 걸었으니 그 하위 요소들 이벤트 버블링 없애기
  return (
    <div
      onMouseOver={() => {
        setIsOpenFull(true);
      }}
      onMouseOut={() => {
        setIsOpenFull(false);
      }}
      onClick={() => {
        setIsFixed(true);
      }}
      onDoubleClick={() => {
        setIsFixed(false);
      }}
      className={tempFix(isFixed)}
    >
      <a
        href="https://github.com/ymStudyLog"
        className="mb-4 flex text-white w-auto cursor-pointer"
      >
        <BsGithub size={30} />
        {isOpenFull && <span className="text-xl text-center ml-4">Github</span>}
      </a>

      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-20}
        className={tempColor(isClicked.home)}
        onClick={(e) => {
          e.stopPropagation();
          setIsClicked({
            home: true,
            projects: false,
            comment: false,
          });
        }}
      >
        <BsHouseDoor size={30} />
        {isOpenFull && <span className="text-xl text-center ml-4">Home</span>}
      </Link>

      <Link
        to="projects"
        smooth={true}
        duration={500}
        className={tempColor(isClicked.projects)}
        onClick={(e) => {
          e.stopPropagation();
          setIsClicked({
            home: false,
            projects: true,
            comment: false,
          });
        }}
      >
        <BsJournals size={30} />
        {isOpenFull && (
          <span className="text-xl text-center ml-4">Projects</span>
        )}
      </Link>

      <Link
        to="comment"
        smooth={true}
        duration={500}
        offset={20}
        className={tempColor(isClicked.comment)}
        onClick={(e) => {
          e.stopPropagation();
          setIsClicked({
            home: false,
            projects: false,
            comment: true,
          });
        }}
      >
        <GoComment size={30} />
        {isOpenFull && (
          <span className="text-xl text-center ml-4">Comment</span>
        )}
      </Link>

      <TopButton />
    </div>
  );
};

export default Sidebar;
