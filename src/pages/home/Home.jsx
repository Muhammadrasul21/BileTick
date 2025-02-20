import React from "react";
import { useGetMoviesQuery } from "../../redux/api/movie.api";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";

const Home = () => {
  const { data, isLoading } = useGetMoviesQuery({
    page: 13,
    without_genres: "18,36,10749",
  });

  return (
    <>
      <Hero data={data} />
      <Carousel data={data} />
      {isLoading && (
        <div className="text-center text-3xl">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
};

export default Home;
