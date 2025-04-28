import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="relative max-w-[1360px] m-auto">
      <Swiper
        className="h-[700px] rounded-lg"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Thumbs, Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {data?.results?.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="cursor-pointer relative flex items-center justify-center text-center text-white p-6"
            style={{
              backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL + movie.backdrop_path})`,
              backgroundSize: "cover",
              height: "640px",
            }}
          >
            <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
              <p className="font-medium text-3xl">{movie.title}</p>
              <div className="flex gap-4">
                <p>{movie.release_date}</p>
                <p>{movie.original_language}</p>
                <p>{movie.vote_average}</p>
                <p>{movie.vote_count}</p>
              </div>
              <Link to={`/movie/${movie.id}`}>
                <button className="flex items-center justify-center gap-2 px-[137px] py-3.5 bg-white text-primary rounded-xl font-medium cursor-pointer">
                  <FaPlay /> Watch
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        className="mt-4 w-full max-w-2xl"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={5}
        modules={[Thumbs, Autoplay]}
        watchSlidesProgress
      >
        {data?.results.map((movie) => (
          <SwiperSlide key={movie.id} className="cursor-pointer group">
            <img
              className="w-full h-16 object-cover rounded-md transition-opacity duration-300 opacity-50 group-[.swiper-slide-thumb-active]:opacity-100"
              src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
              alt={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
