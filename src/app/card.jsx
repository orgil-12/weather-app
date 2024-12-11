"use client";

import { SearchIcon } from "../componant/SearchIcon";

export default function Card() {
  return (
    <div className="w-full h-screen flex  ">
      <div className="w-1/2 h-screen bg-[#F3F4F6] box-border  flex flex-col ">
        <div className="mt-10 ml-10 w-[567px] h-[80px] rounded-[48px] px-6 py-4 flex  bg-white items-center ">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="  text-[32px] focus:outline-0 ml-4 "
          />
        </div>
        <div className="w-[814px] h-[1228px] rounded-[78px] bg-white box-border m-auto ">
            
        </div>
      </div>
      <div className="w-1/2 h-screen bg-[#0F141E] "></div>
    </div>
  );
}
