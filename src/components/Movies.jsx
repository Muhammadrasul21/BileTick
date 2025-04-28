import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "@/assets/images.png";
import Skeleton from "./skeleton/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { toggleSaved } from "@/redux/features/savedSlice";
import { RiCoupon3Fill, RiCoupon3Line } from "react-icons/ri";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const Movies = ({ data, isLoading }) => {
  const [visibleMovies, setVisibleMovies] = useState(10);
  const dispatch = useDispatch();
  const saved = useSelector((state) => state.saved.value);

  return (
    <div className="container">
      <p className="mb-4 text-xl font-medium dark:text-primary">Movies</p>

      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="footer grid grid-cols-5 gap-2.5 mb-8">
          {(data?.results || data)?.slice(0, visibleMovies).map((movie) => {
            const isInSaved = saved.some((item) => item.id === movie.id);

            return (
              <div
                className="border relative group overflow-hidden border-gray-300 dark:border-gray-800 dark:bg-gray-700"
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
                <button
                  onClick={() => dispatch(toggleSaved(movie))}
                  className="bg-amber-50 dark:bg-[#000000ba] duration-200 right-2 absolute top-2 md:right-2 text-xl cursor-pointer p-2 rounded-full"
                >
                  {isInSaved ? (
                    <FaBookmark className="text-black dark:text-primary" />
                  ) : (
                    <FaRegBookmark className="text-primary" />
                  )}
                </button>
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Movies;
