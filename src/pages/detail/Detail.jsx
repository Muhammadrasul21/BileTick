import React, { useEffect, useState } from "react";
import {
  useGetSingleMovieCreditsQuery,
  useGetSingleMovieImagesQuery,
  useGetSingleMovieQuery,
  useGetSingleMovieSimilarQuery,
} from "../../redux/api/movie.api";
import { useParams } from "react-router-dom";
import Movies from "@/components/Movies";
import { Image } from "antd";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleMovieQuery(id);
  const { data: images } = useGetSingleMovieImagesQuery(id);
  const { data: similarData } = useGetSingleMovieSimilarQuery(id);
  const { data: credits } = useGetSingleMovieCreditsQuery(id);

  const [rating, setRating] = useState(0);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  }, [id]);

  if (isLoading) {
    return <p className="text-center text-white text-xl">Loading...</p>;
  }

  return (
    <>
      <div className="h-[700px] bg-gray-400 mt-2">
        <img
          className="w-full h-full object-cover"
          src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path}
          alt={data?.title}
        />
      </div>
      <div className="container mx-auto">
        <div className="mt-5 px-10">
          <h1 className="text-4xl font-bold">{data?.title}</h1>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-yellow-400 text-xl">{data?.vote_average}</p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`cursor-pointer text-2xl ${
                    index < Math.round((data?.vote_average || 0) / 2)
                      ? "text-yellow-500"
                      : "text-gray-600"
                  }`}
                  onClick={() => setRating((index + 1) * 2)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <p className="text-lg mt-4">
            {data?.overview || "No information available"}
          </p>

          <div className="mt-4 space-y-2">
            <p>
              <b>Duration:</b>{" "}
              {data?.runtime ? `${data.runtime} min` : "Unknown"}
            </p>
            <p>
              <b>Genres:</b>{" "}
              {data?.genres?.length
                ? data.genres.map((g) => g.name).join(", ")
                : "Unknown"}
            </p>
            <p>
              <b>Budget:</b>{" "}
              {data?.budget ? `$${data.budget.toLocaleString()}` : "Unknown"}
            </p>
            <p>
              <b>Language:</b> {data?.original_language || "Unknown"}
            </p>
            <p>
              <b>Quality:</b> HD
            </p>
          </div>
        </div>

        <div className="mt-10 px-10">
          <h2 className="text-3xl font-semibold mb-4">Cast:</h2>
          <div className="actors grid grid-cols-8 gap-4">
            {credits?.cast?.length ? (
              credits.cast.slice(0, 8).map((actor) => (
                <div key={actor.id} className="w-[120px] text-center">
                  <img
                    className="w-full h-[120px] object-cover rounded-lg"
                    src={
                      import.meta.env.VITE_IMAGE_URL +
                      (actor.profile_path || "/no-image.jpg")
                    }
                    alt={actor.name}
                  />
                  <p className="mt-2">{actor.name}</p>
                </div>
              ))
            ) : (
              <p>No information available</p>
            )}
          </div>
        </div>

        <div className="mt-10 px-10">
          <h2 className="text-3xl font-semibold mb-4">Stills:</h2>
          <div className="footer grid grid-cols-4 gap-2">
            {images?.backdrops?.length ? (
              images.backdrops
                .slice(0, 4)
                .map((image) => (
                  <Image
                    key={image.file_path}
                    className="w-full h-[200px] object-cover rounded-lg"
                    src={import.meta.env.VITE_IMAGE_URL + image.file_path}
                    alt=""
                  />
                ))
            ) : (
              <p>No images available</p>
            )}
          </div>
        </div>

        <div className="mt-10 px-10">
          <h2 className="text-3xl font-semibold mb-4">Similar Movies:</h2>
          <Movies data={similarData} />
        </div>
      </div>
    </>
  );
};

export default Detail;
