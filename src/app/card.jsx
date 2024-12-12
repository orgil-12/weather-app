"use client";
import { Heart } from "@/componant/Heart";
import { Home } from "@/componant/HomeSvg";
import { Pin } from "@/componant/Pin";
import { User } from "@/componant/User";
import { Location } from "@/componant/location";

export default function Card({ value, temperature, status }) {
  const statusColor = value === "day" ? "text-[#FF8E27]" : "text-[#777CCE]";
  const gradient =
    value === "day"
      ? "bg-gradient-to-b from-[#111827] to-[#6B7280] "
      : "bg-gradient-to-b from-[#F9FAFB] to-[#000000]";
  const nightColor = "bg-gradient-to-b from-[#1F2937] to-[#111827] text-white ";
  const color = value === "night" ? nightColor : "bg-white text-black";
  const backgroundColor =
    value === "night" ? "bg-[#111827BF]" : "bg-[#FFFFFFBF]";
  return (
    <div
      className={`w-[414px] h-[832px] rounded-[48px] flex flex-col ${backgroundColor} z-10 backdrop-blur-[24px]`}
    >
      <div
        className={`w-[398px] h-[504px] bg-white rounded-[42px] mt-[8px] ${color} flex flex-col mx-auto relative`}
      >
        <div className="absolute right-[45px] top-[85px] ">
          <Location />
        </div>
        <div className="mt-[56px] ml-[48px] ">
          <p className="text-[18px] text-[#9CA3AF]  ">September 10, 2021</p>
          <h1 className="text-[48px] font-extrabold ">Krakow</h1>
        </div>
        <img
          src="/nightCloud.png"
          className="w-[264.89px] h-[264.89px] mx-auto drop-shadow-[0_5px_25px_rgba(255,255,255,0.5)] mt-[24px] "
        />
      </div>
      <div className="ml-[48px] -mt-[50px]">
        <h1
          className={`text-[144px] font-extrabold text-transparent bg-clip-text ${gradient}`}
        >
          {temperature}
        </h1>
        <h2 className={`text-[24px] font-extrabold ${statusColor}`}>
          {status}
        </h2>
      </div>
      <div className="flex w-[318px] h-[32px] justify-between mx-auto mt-[50px] ">
        <Home />
        <Pin />
        <Heart />
        <User />
      </div>
    </div>
  );
}
