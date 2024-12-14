"use client";
import { Heart } from "@/componant/Heart";
import { Home } from "@/componant/HomeSvg";
import { Pin } from "@/componant/Pin";
import { User } from "@/componant/User";
import { Location } from "@/componant/location";
import { useEffect, useState } from "react";

export default function Card({ value, cityName, temperature, condition,date }) {
  const [dayStatus, setDayStatus] = useState("/daySun.png")
  const [nightStatus, setNightStatus] = useState("/nightMoon.png")
  const weatherStatus = value==="day" ? dayStatus : nightStatus;
  
  useEffect(() => {
    if(value==="day"){
      if(condition.includes("Sunny")){
        setDayStatus("/daySun.png")
      }else if(condition.includes("Overcast")){
        setDayStatus("/dayCloud.png")
      }else if(condition.includes("snow")){
        setDayStatus("/daySnow.png")
      }else if(condition.includes("rain")){
        setDayStatus("/dayRain.png")
      }else if(condition.includes("thunder")){
        setDayStatus("/dayThunder.png")
      }else if(condition.includes("wind")){
        setDayStatus("/dayWind.png")
      }else if(condition.includes("Mist")){
        setDayStatus("/dayCloud.png")
      }else if(condition.includes("Cloudy")){
        setDayStatus("/dayCloud.png")
      }
    }else{
      if(condition.includes("Clear")){
        setNightStatus("/nightMoon.png")
      }else if(condition.includes("Overcast")){
        setNightStatus("/nightCloud.png")
      }else if(condition.includes("snow")){
        setNightStatus("/nightSnow.png")
      }else if(condition.includes("rain")){
        setNightStatus("/nightRain.png")
      }else if(condition.includes("thunder")){
        setNightStatus("/nightThunder.png")
      }else if(condition.includes("wind")){
        setNightStatus("/nightWind.png")
      }else if(condition.includes("Cloudy")){
        setNightStatus("/nightCloud.png")
      }
    }
  },[cityName, temperature, condition])
  
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
      className={`w-[414px] h-[832px] rounded-[48px] flex flex-col ${backgroundColor} z-10 backdrop-blur-[10px]`}
    >
      <div
        className={`w-[398px] h-[504px] bg-white rounded-[42px] mt-[8px] ${color} flex flex-col mx-auto relative`}
      >
        <div className="absolute right-[45px] top-[85px] ">
          <Location />
        </div>
        <div className="mt-[56px] ml-[48px] ">
          <p className="text-[18px] text-[#9CA3AF]  ">{date}</p>
          <h1 className="text-[48px] capitalize font-extrabold w-[350px] h-[70px] ">{cityName}</h1>
        </div>
        <img
          src = {weatherStatus}
          className="w-[264.89px] h-[264.89px] mx-auto drop-shadow-[0_5px_25px_rgba(255,255,255,0.5)] mt-[24px] "
        />
      </div>
      <div className="ml-[48px] -mt-[50px]">
        <h1
          className={`text-[144px] font-extrabold text-transparent bg-clip-text ${gradient}`}
        >
          {temperature}°
        </h1>
        <h2 className={`text-[24px] font-extrabold ${statusColor}`}>
          {condition}
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
