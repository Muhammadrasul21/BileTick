import React from "react";
import { useGetMoviesQuery } from "../../redux/api/movie.api";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
const Home = () => {
  const { data, isLoading, error } = useGetMoviesQuery({
    page: 13,
    without_genres: "18,36,10749",
  });

  if (isLoading) {
    return (
      <div className="text-center text-3xl my-10">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <>
      <Hero data={data} />
      <Carousel data={data} />
    </>
  );
};

export default Home;
