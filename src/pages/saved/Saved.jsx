import React from "react";
import { useSelector } from "react-redux";
import Movies from "@/components/Movies";
import empty from "@/assets/empty.webp";
const Saved = () => {
  const saved = useSelector((state) => state.saved.value);

  return(
    <div>
      {
        saved.length > 0 ?(
          <div className="container">
          <div className=" flex flex-col gap-[10px] items-center text-center mb-8">
            <p className="text-4xl tracking-[2px]">Your saveds</p>
            <Movies data={saved} />
          </div>
          </div>
        ):(
          <div className="container flex items-center justify-center">
          <img src={empty} alt="" className="w-[600px]" />
        </div>
        )
      }
    </div>
  )

};

export default Saved;
