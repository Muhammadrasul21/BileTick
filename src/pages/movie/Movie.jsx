import Movies from "@/components/Movies";
import React, { useEffect } from "react";
import { Pagination, Empty } from "antd";
import { useGetGenresQuery, useGetMoviesQuery } from "@/redux/api/movie.api";
import { useParams, useSearchParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page")) || 1;
  let with_genres = params.get("genres") || "";

  const { data, isLoading } = useGetMoviesQuery({
    page,
    without_genres: "18,36,10749",
    with_genres: with_genres.split("-").join(","),
  });

  const { data: genredata } = useGetGenresQuery({});

  const handleChangePage = (p) => {
    const newParams = new URLSearchParams(params);
    newParams.set("page", p.toString());
    setParams(newParams);
  };

  const handleChangeGenre = (id) => {
    let array = with_genres ? with_genres.split("-") : [];

    if (array.includes(id.toString())) {
      array = array.filter((i) => i !== id.toString());
    } else {
      array.push(id);
    }

    const newParams = new URLSearchParams(params);
    if (array.length === 0) {
      newParams.delete("genres");
      newParams.delete("page");
    } else {
      newParams.set("genres", array.join("-"));
      newParams.set("page", "1");
    }
    setParams(newParams);
  };

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  }, [page]);

  return (
    <div className="container">
      <div className="flex category gap-2 mb-4 overflow-auto pb-2">
        {genredata?.genres?.map((genre) => (
          <div
            onClick={() => handleChangeGenre(genre.id)}
            className={`whitespace-nowrap px-4 py-1 rounded select-none cursor-pointer ${
              with_genres.includes(genre.id.toString())
                ? "bg-primary text-white  dark:text-primary border dark:border-primary dark:bg-[#111111] transition duration-300 ease-in-out"
                : " dark:bg-[#111111] dark:text-white border dark:border-gray-800 transition duration-300 ease-in-out"
            }`}
            key={genre.id}
          >
            {genre.name}
          </div>
        ))}
      </div>

      {!data?.total_results && !isLoading && <Empty />}

      <Movies data={data} isLoading={isLoading} />

      {!!data?.total_results && (
        <div className="flex my-5 justify-center">
          <Pagination
            showSizeChanger={false}
            defaultCurrent={1}
            defaultPageSize={10}
            total={Math.min(data?.total_results || 0, 500)}
            current={page}
            onChange={handleChangePage}
          />
        </div>
      )}
    </div>
  );
};

export default Movie;
