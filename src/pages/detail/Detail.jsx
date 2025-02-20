import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleMovieQuery,
  useGetSingleMovieImagesQuery,
  useGetSingleMovieSimilarQuery,
  useGetSingleMovieCreditsQuery,
} from "../../redux/api/movie.api";
import Movies from "@/components/Movies";

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
    return <p className="text-center text-white text-xl">Yuklanmoqda...</p>;
  }

  return (
    <div className="container mx-auto text-white">
      {/* Background rasmi */}
      <div className="relative h-[700px]">
        <img
          className="w-full h-full object-cover"
          src={import.meta.env.VITE_IMAGE_URL + (data?.backdrop_path || "/no-image.jpg")}
          alt={data?.title || "Ma'lumot yo‘q"}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Film haqida ma'lumot */}
      <div className="mt-5 px-10">
        <h1 className="text-4xl font-bold">{data?.title || "Noma'lum"}</h1>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-yellow-400 text-xl">{data?.vote_average || "0"}</p>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`cursor-pointer text-2xl ${
                  index < Math.round((data?.vote_average || 0) / 2) ? "text-yellow-500" : "text-gray-600"
                }`}
                onClick={() => setRating((index + 1) * 2)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <p className="text-lg mt-4">{data?.overview || "Hozircha ma'lumot yo‘q"}</p>

        <div className="mt-4 space-y-2">
          <p><b>Muddati:</b> {data?.runtime ? `${data.runtime} min` : "Noma'lum"}</p>
          <p><b>Janr:</b> {data?.genres?.length ? data.genres.map((g) => g.name).join(", ") : "Noma'lum"}</p>
          <p><b>Byudjet:</b> {data?.budget ? `$${data.budget.toLocaleString()}` : "Noma'lum"}</p>
          <p><b>Til:</b> {data?.original_language || "Noma'lum"}</p>
          <p><b>Sifati:</b> HD</p>
        </div>
      </div>

      {/* Rollarda */}
      <div className="mt-10 px-10">
        <h2 className="text-3xl font-semibold mb-4">Rollarda:</h2>
        <div className="flex gap-4 overflow-x-auto">
          {credits?.cast?.length ? (
            credits.cast.slice(0, 5).map((actor) => (
              <div key={actor.id} className="w-[120px] text-center">
                <img
                  className="w-full h-[120px] object-cover rounded-lg"
                  src={import.meta.env.VITE_IMAGE_URL + (actor.profile_path || "/no-image.jpg")}
                  alt={actor.name}
                />
                <p className="mt-2">{actor.name}</p>
              </div>
            ))
          ) : (
            <p>Ma'lumot yo‘q</p>
          )}
        </div>
      </div>

      {/* Kadrlar */}
      <div className="mt-10 px-10">
        <h2 className="text-3xl font-semibold mb-4">Kadrlar:</h2>
        <div className="grid grid-cols-4 gap-2">
          {images?.backdrops?.length ? (
            images.backdrops.slice(0, 4).map((image) => (
              <img
                key={image.file_path}
                className="w-full h-[200px] object-cover rounded-lg"
                src={import.meta.env.VITE_IMAGE_URL + image.file_path}
                alt=""
              />
            ))
          ) : (
            <p>Ma'lumot yo‘q</p>
          )}
        </div>
      </div>

      {/* Oxshash filmlar */}
      <div className="mt-10 px-10">
        <h2 className="text-3xl font-semibold mb-4">Oxshash filmlar:</h2>
        {similarData?.results?.length ? <Movies data={similarData} /> : <p>Oxshash filmlar topilmadi</p>}
      </div>
    </div>
  );
};

export default Detail;
