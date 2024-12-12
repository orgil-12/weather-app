"use client";
import Image from "next/image";
import Card from "./card";
import { SearchIcon } from "../componant/SearchIcon";
import { Manrope } from "next/font/google";
import { LogoLeft, LogoRigth } from "@/componant/pineconeLogo";
const manrope = Manrope({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className={`w-full h-screen flex ${manrope.className}`}>
      <div
        className={`w-1/2 h-screen bg-[#F3F4F6]  flex flex-col-reverse relative items-center justify-between pb-[90px] `}
      >
        <Card value="day" temperature="26°" status="Bright" />
        <SearchInput />
        <img
          src="/ellipseYellow.png"
          className="size-[128px] absolute top-[130px] left-20 "
        />
      </div>
      <div className="w-1/2 h-screen bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center flex flex-col-reverse items-center relative justify-between pb-[90px] ">
        <Card value="night" temperature="17°" status="Clear" />
        <div className="absolute -left-[35px] top-[500px] flex gap-3">
          <LogoLeft />
          <LogoRigth />
        </div>
        <img
          src="/ellipse.png"
          className="size-[128px] absolute bottom-9 right-20  "
        />
        <Circle size="540px" top="270px" left="270px" />
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
        className="  text-[32px] focus:outline-0 ml-4 text-black"
      />
    </div>
  );
};

const Circle = ({ size, top, left }) => {
  return (
    <div
      className={`w-[${size}] h-[${size}] border rounded-full absolute border-slate-500 -left-[${left}] top-[${top}] opacity-[.3] `}
    ></div>
  );
};
