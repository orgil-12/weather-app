"use client";
import { Manrope } from "next/font/google";
const manrope = Manrope({
  subsets:["latin"]
})

export default function Card({ value , temperature}) {
  const gradient = value ==="day" ? "bg-gradient-to-b from-[#111827] to-[#6B7280] " : "bg-gradient-to-b from-[#F9FAFB] to-[#000000]";
  const nightColor =
    "bg-gradient-to-b from-[#1F2937] to-[#111827] text-white ";
  const color = value === "night" ? nightColor : "bg-white";
  const cardBackground = value ==="night" ? "bg-[#111827]" : "bg-white"
  return (
    <div className={`w-[814px] h-[1278px] rounded-[78px] ${cardBackground} flex justify-center ${manrope.className} `}>
      <div className={`w-[794px] h-[900px] bg-white rounded-[70px] mt-[10px] ${color} flex flex-col`}>
        <div className="mt-[56px] ml-[100px] ">
          <p className="text-[30px] text-[#9CA3AF]  ">September 10, 2021</p>
          <h1 className="text-[88px] font-extrabold ">Krakow</h1>
        </div>
        <img src="/nightCloud.png" className="w-[477px] h-[477px] mx-auto drop-shadow-[0_5px_25px_rgba(255,255,255,0.5)] mt-5 "/>
        <h1 className={`text-[200px] ml-[100px] font-extrabold text-transparent bg-clip-text ${gradient}`} >{temperature}</h1>
      </div>
    </div>
  );
}
