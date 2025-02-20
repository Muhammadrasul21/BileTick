import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Carousel = ({ data }) => {
  return (
    <div className="container">
      <div className="w-full flex justify-between mt-12 mb-5">
        <p>During the week</p>
        <Link to={"/movies"}>
          <p className="text-primary flex items-center font-medium cursor-pointer">
            Show all <FaChevronRight className="w-4 h-4" />
          </p>
        </Link>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper gap-5"
      >
        {data?.results?.map((movie) => (
          <SwiperSlide key={movie.id} className="min-h-[400px] max-w-[280 px]">
            <div className="flex flex-col gap-2">
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                  alt={movie.title}
                />
              </Link>
              <div className="flex flex-col gap-2">
                <p className="font-medium text-2xl" title={movie.title}>
                  {movie.title}
                </p>
                <p
                  className="font-medium text-[14px] text-[#4D4D4D]"
                  title={movie.title}
                >
                  {movie.release_date}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
