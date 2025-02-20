import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGetSingleMovieQuery } from "@/redux/api/movie.api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Hero = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleMovieQuery(id);
  useEffect(() => {
    console.log("Movie ID changed:", id);
  }, [id]);

  return (
    <div>
      <Swiper className="mySwiper h-[700px] bg-gray-400">
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-full object-cover"
              src={`${import.meta.env.VITE_IMAGE_URL}${data?.backdrop_path}`}
              alt="Movie Backdrop"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-[700px] bg-gray-400">
        <img
          className="w-full h-full object-cover "
          src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
