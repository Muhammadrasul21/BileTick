import { useGetMoviesQuery } from "@/redux/api/movie.api";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const { data, isLoading } = useGetMoviesQuery({
    without_genres: "18,36,10749",
  });

  const [visibleMovies, setVisibleMovies] = useState(10);

  const handleSeeMore = () => {
    setVisibleMovies((prev) => prev + 10);
  };

  return (
    <div className="container">
      <div className="footer grid grid-cols-5 gap-2.5 mb-8">
        {data?.results?.slice(0, visibleMovies).map((movie) => (
          <div
            className="border border-gray-300 dark:border-gray-800 dark:bg-gray-700"
            key={movie.id}
          >
            <Link
              to={`/movie/${movie.id}`}
              className="h-[400px] block bg-gray-400"
            >
              <img
                className="w-full h-full object-cover"
                src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
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

      {visibleMovies < (data?.results?.length || 0) && (
        <div className="flex justify-center mt-5">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 bg-primary text-white rounded-lg font-medium mb-4"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Movies;
