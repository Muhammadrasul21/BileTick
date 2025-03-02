import React, { useEffect, useState } from "react";
import { useGetSingleMovieQuery, useGetSingleItemsQuery } from "../../redux/api/movie.api";
import { Link, useParams, useNavigate } from "react-router-dom";
import Movies from "@/components/Movies";
import { Image } from "antd";
import { FaPlay } from "react-icons/fa";
import { LeftOutlined } from "@ant-design/icons";
import { FiShare2 } from "react-icons/fi";
import { RiCoupon3Fill, RiCoupon3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux"; 
import { toggleSaved } from "@/redux/features/savedSlice"; 

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetSingleMovieQuery(id);
  const { data: images } = useGetSingleItemsQuery({ id, path: "images" });
  const { data: similarData } = useGetSingleItemsQuery({ id, path: "similar" });
  const { data: credits } = useGetSingleItemsQuery({ id, path: "credits" });

  const dispatch = useDispatch();
  const saved = useSelector((state) => state.saved.value);
  const isInSaved = saved.some((item) => item.id === data?.id); 

  const [rating, setRating] = useState(0);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  }, [id]);

  if (isLoading) {
    return <p className="text-center text-white text-xl">Loading...</p>;
  }

  return (
    <>
      <div className="w-full flex justify-center border-red-500">
        <div
          className="w-[1360px] h-[700px] p-3 rounded-xl bg-gray-400 mt-2 flex flex-col items-center justify-between pb-[38px] text-white text-center "
          style={{
            backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL + data?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full flex justify-between">
            <div
              onClick={() => navigate(-1)}
              className="w-14 h-14 bg-[#ffffffc4] dark:bg-[#000000c4] flex items-center justify-center rounded-xl text-primary cursor-pointer"
            >
              <LeftOutlined />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => dispatch(toggleSaved(data))}
                className="w-14 h-14 bg-[#ffffffc4] dark:bg-[#000000c4] flex items-center justify-center rounded-xl text-primary cursor-pointer"
              >
                {isInSaved ? <RiCoupon3Fill className="text-red-500" /> : <RiCoupon3Line />}
              </button>

              <div className="w-14 h-14 bg-[#ffffffc4] dark:bg-[#000000c4] flex items-center justify-center rounded-xl text-primary cursor-pointer">
                <FiShare2 />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-medium text-3xl">{data?.title}</p>
            <div className="flex gap-4 mt-4">
              <p>{data?.release_date}</p>
              <p>{data?.original_language}</p>
              <p>{data?.vote_average}</p>
              <p>{data?.vote_count}</p>
            </div>
            <Link to={`/movie/${data?.id}`} className="mt-3">
              <button className="flex items-center justify-center gap-2 px-[137px] py-3.5 bg-[#ffffff] dark:bg-[#000000] text-primary rounded-xl font-medium cursor-pointer">
                <FaPlay /> Watch
              </button>
            </Link>
          </div>
        </div>
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

          <p className="text-lg mt-4">{data?.overview || "No information available"}</p>

          <div className="mt-4 space-y-2">
            <p>
              <b>Duration:</b> {data?.runtime ? `${data.runtime} min` : "Unknown"}
            </p>
            <p>
              <b>Genres:</b> {data?.genres?.length ? data.genres.map((g) => g.name).join(", ") : "Unknown"}
            </p>
            <p>
              <b>Budget:</b> {data?.budget ? `$${data.budget.toLocaleString()}` : "Unknown"}
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
          <h2 className="text-3xl font-semibold mb-4">Similar Movies:</h2>
          <Movies data={similarData} />
        </div>
      </div>
    </>
  );
};

export default Detail;
