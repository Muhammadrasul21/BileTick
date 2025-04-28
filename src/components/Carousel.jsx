import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSaved } from "@/redux/features/savedSlice";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const Carousel = ({ data }) => {
  const dispatch = useDispatch();
  const saved = useSelector((state) => state.saved.value);

  return (
    <div className="container">
      <div className="w-full flex justify-between mt-12 mb-5">
        <p>During the week</p>
        <Link to={"/movie"}>
          <p className="text-primary flex items-center font-medium cursor-pointer">
            Show all <FaChevronRight className="w-4 h-4" />
          </p>
        </Link>
      </div>

      <Swiper
        slidesPerView={4}
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
        {data?.results?.map((movie) => {
          const isInSaved = saved.some((item) => item.id === movie.id);

          return (
            <SwiperSlide
              key={movie.id}
              className="min-h-[400px] max-w-[280px] mb-10"
            >
              <div className="flex flex-col gap-2 relative">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                    alt={movie.title}
                  />
                </Link>
                <button
                  onClick={() => dispatch(toggleSaved(movie))}
                  className="bg-amber-50 dark:bg-[#000000ba] duration-200 right-2 absolute top-2 text-xl cursor-pointer p-2 rounded-full"
                >
                  {isInSaved ? (
                    <FaBookmark className="text-black dark:text-primary" />
                  ) : (
                    <FaRegBookmark className="text-primary" />
                  )}
                </button>
                <div className="flex flex-col gap-2">
                  <p
                    className="font-medium text-2xl line-clamp-1"
                    title={movie.title}
                  >
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
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
