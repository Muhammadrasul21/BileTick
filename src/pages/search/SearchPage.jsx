import React from "react";
import Movies from "@/components/Movies";
import { useGetSearchQuery } from "@/redux/api/movie.api";
import { Input, Empty } from "antd";
import { useSearchParams } from "react-router-dom";

const { Search } = Input;
const SearchPage = () => {
  const [params, setParams] = useSearchParams();
   const query = params.get("q") || ""


  const onSearch = (value) => {
    params.set("q", value)
    setParams(params)
  };
  const { data, isSuccess } = useGetSearchQuery(
    { include_adult: false, query: query },
    { skip: !query },
  );

  return (
    <div className="container">
      <div className="max-w-[600px] mx-auto mb-32">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          defaultValue={query}
          autoFocus
        />
      </div>
       {!data?.total_results && <Empty/>}  
       <Movies data={data}/>  
    </div>
  );
};

export default React.memo(SearchPage);
