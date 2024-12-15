"use client";
import Image from "next/image";
import Card from "./card";
import { SearchIcon } from "../componant/SearchIcon";
import { Manrope } from "next/font/google";
import { LogoLeft, LogoRigth } from "@/componant/pineconeLogo";
import { useEffect, useState } from "react";
import { Pin } from "@/componant/Pin";
const manrope = Manrope({
  subsets: ["latin"],
});

const API_KEY = "b873d619539745a787172637241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const citiesData = [
    "NEW YORK",
    "LONDON",
    "ULAANBAATAR",
    "WASHINGTON",
    "MOSKVA",
    "ULAANGOM",
    "CHICAGO",
    "SAN FRANCISCO",
  ];
  const [dayTemp, setDayTemp] = useState({
    temperature: 0,
    condition: "",
  });
  const [nightTemp, setNightTemp] = useState({
    temperature: 0,
    condition: "",
  });
  const [date, setDate] = useState("");

  const onChangeText = (event) => {
    setSearch(event.target.value);
  };

  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
      setSearch("");
    }
  };

  // useEffect(() => {
  //   fetch(
  //     `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=277`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCitiesData(
  //         data?.results?.flatMap((result) => result?.alternate_names || [])
  //       );
  //     });
  // }, []);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setDate(data?.forecast?.forecastday[0].date);
        setDayTemp({
          temperature: Math.floor(data?.forecast?.forecastday[0].day.maxtemp_c),
          condition: data?.forecast?.forecastday[0].day.condition?.text.trim(),
        });
        setNightTemp({
          temperature: Math.floor(data?.forecast?.forecastday[0].day.mintemp_c),
          condition: data?.forecast?.forecastday[0]?.hour[20]?.condition?.text, //Оройны цаг агаарыг 20 цагаас авч үзэв.
        });
      });
  }, [city]);

  return (
    <div
      className={`w-full h-screen flex ${manrope.className} overflow-hidden`}
    >
      <div
        className={`w-1/2 h-screen bg-[#F3F4F6]  flex flex-col-reverse relative items-center justify-between pb-[90px]`}
      >
        <Card
          value="day"
          cityName={city}
          temperature={dayTemp.temperature}
          condition={dayTemp.condition.trim()}
          date={date}
        />
        <SearchInput
          search={search}
          setSearch={setSearch}
          onChangeText={onChangeText}
          onPressEnter={onPressEnter}
          data={citiesData}
        />
        <img
          src="/ellipseYellow.png"
          className="size-[128px] absolute top-[170px] left-[300px] z-[1]"
        />
      </div>
      <div className="w-1/2 h-screen bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center flex flex-col-reverse items-center relative justify-between pb-[90px]  ">
        <Card
          value="night"
          cityName={city}
          temperature={nightTemp.temperature}
          condition={nightTemp.condition.trim()}
          date={date}
        />
        <div className="absolute -left-[50px] top-[525px] flex gap-3 ">
          <LogoLeft />
          <LogoRigth />
        </div>
        <img
          src="/ellipse.png"
          className="size-[128px] absolute bottom-9 right-[290px]  "
        />
        <div
          className={`w-[220px] h-[220px] border rounded-full absolute border-slate-500 -left-[110px] top-[460px] opacity-[.5] `}
        ></div>
        <div
          className={`w-[540px] h-[540px] border rounded-full absolute border-slate-500 -left-[270px] top-[300px] opacity-[.5] `}
        ></div>
        <div
          className={`w-[940px] h-[940px] border rounded-full absolute border-slate-500 -left-[470px] top-[100px] opacity-[.5] `}
        ></div>
        <div
          className={`w-[1340px] h-[1340px] border rounded-full absolute border-slate-500 -left-[670px] -top-[100px] opacity-[.5] `}
        ></div>
        <div
          className={`w-[1740px] h-[1740px] border rounded-full absolute border-slate-500 -left-[870px] -top-[300px] opacity-[.5] `}
        ></div>
      </div>
    </div>
  );
}

const SearchInput = ({
  search,
  setSearch,
  onChangeText,
  onPressEnter,
  data,
}) => {
  const suggest = data?.filter((citiesName) =>
    citiesName?.includes(search.toUpperCase())
  );
  console.log(search);
  console.log(suggest);
  return (
    <div className="m-10 ml-10 w-[567px] h-[80px] rounded-[48px] px-6 py-4 flex bg-white items-center z-10 relative">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        className="  text-[32px] focus:outline-0 ml-4 text-black"
        value={search}
        onChange={onChangeText}
        onKeyDown={onPressEnter}
        autoFocus
      />
      {search && (
        <div
          className={`w-[500px] h-[100px] bg-white absolute top-[100px] opacity-[0.9] rounded-3xl overflow-y-scroll p-[20px] `}
        >
          {suggest.map((filteredCitiesName, index) => {
            return (
              <div
                className="text-black text-[20px] flex items-center gap-3 "
                key={index}
                onClick={() => setSearch(filteredCitiesName)}
              >
                <Pin />
                {filteredCitiesName}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
