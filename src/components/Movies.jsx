import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "@/assets/images.png";
import Skeleton from "./skeleton/Skeleton";

const Movies = ({ data, isLoading }) => {
  const [visibleMovies, setVisibleMovies] = useState(10);

  return (
    <div className="container">
      <p className="mb-4 text-xl font-medium dark:text-primary">Movies</p>

      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="footer grid grid-cols-5 gap-2.5 mb-8">
          {data?.results?.slice(0, visibleMovies).map((movie) => (
            <div
              className="border border-gray-300 dark:border-gray-800 dark:bg-gray-700"
              key={movie.id}
            >
              <Link to={`/movie/${movie.id}`} className="h-[400px] block">
                <img
                  className="w-full h-full object-cover"
                  src={
                    movie.poster_path
                      ? import.meta.env.VITE_IMAGE_URL + movie.poster_path
                      : images
                  }
                  alt={movie.title}
                />
              </Link>
              <div className="p-1.5">
                <h3
                  title={movie.title}
                  className="text-xl font-medium line-clamp-1"
                >
                  {movie.title}
                </h3>
                <p className="text-yellow-500 font-medium">
                  {movie.vote_average}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
