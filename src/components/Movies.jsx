import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ data }) => {
  return (
    <div className="container grid grid-cols-5 gap-2.5">
      {data?.results?.map((movie) => (
        <div
          className="border border-gray-300 dark:border-gray-800 dark:bg-gray-700"
          key={movie.id}
        >
          <Link
            to={`/movie/${movie.id}`}
            className="h-[400px]  block bg-gray-400"
          >
            <img
              className="w-full h-full object-cover"
              src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
              alt=""
            />
          </Link>
          <div className="p-1.5">
            <h3
              title={movie.title}
              className="text-xl font-medium line-clamp-1"
            >
              {movie.title}
            </h3>
            <p className="text-yellow-500 font-medium">{movie.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
