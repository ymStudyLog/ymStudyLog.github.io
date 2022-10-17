import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../components/Card';
import projects from '../lib/projects';

const Projects = () => {
  SwiperCore.use([Navigation, Pagination]);

  return (
    <div name="projects" className="w-full h-screen">
      <div className="max-w-[1000px] h-full mx-auto pb-[20px] flex justify-center items-center flex-col">
        <div className="text-4xl font-bold border-b-4 mb-4 border-[#182848] mt-12">
          <h1>Projects</h1>
        </div>

        <Swiper
          style={{
            width: '100%',
            paddingBottom: '35px',
            zIndex: '0',
          }}
          slidesOffsetBefore={50}
          spaceBetween={50}
          centeredSlides
          autoHeight={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{}}
          loop={true}
        >
          <div className="max-w-[450px] tablet:max-w-[900px]">
            {projects.map((project) => {
              return (
                <SwiperSlide key={project.id}>
                  <Card project={project} />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
