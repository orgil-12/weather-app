"use client";
import Image from "next/image";
import Card from "./card";
import { SearchIcon } from "../componant/SearchIcon";
import { Manrope } from "next/font/google";
const manrope = Manrope({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className={`w-full h-screen flex `}>
      <div
        className={`w-1/2 h-screen bg-[#F3F4F6]  flex flex-col-reverse items-center justify-between pb-[50px] `}
      >
        <Card value="day" temperature="26°" status="bright"/>
        <SearchInput />
      </div>
      <div className="w-1/2 h-screen bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center flex flex-col-reverse items-center  justify-between pb-[50px] ">
        <Card value="night" temperature="17°" status="clear"/>
      </div>
    </div>
  );
}

const SearchInput = () => {
  return (
    <div className="mt-10 ml-10 w-[567px] h-[80px] rounded-[48px] px-6 py-4 flex bg-white items-center ">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        className="  text-[32px] focus:outline-0 ml-4 "
      />
    </div>
  );
};
