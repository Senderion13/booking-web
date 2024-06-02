"use client";
import type { NextPage } from "next";
import HotelFrame from "./hotel-frame";
import { useContext, useEffect, useState } from "react";

export type HotelsType = {
  title: string;
  location: string;
  rating: number;
  description: string;
};

const Hotels: NextPage = () => {
  const [hotels, setHotels] = useState<Array<HotelsType>>([
    { title: "", location: "", rating: 0, description: "" },
  ]);
  useEffect(() => {
    console.log(localStorage.getItem("hotels"));
    //const rawHotel = localStorage.getItem("hotels");
    //const hotel = JSON.parse(rawHotel ? rawHotel : "");
    //setHotels([...hotels, hotel]);
  });

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[2.25rem] max-w-full text-left text-[2.25rem] text-gray font-namu mq750:gap-[1.125rem]`}
    >
      <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-[1.375rem] mq1050:text-[1.813rem]">
        Найкращі готелі Києва
      </h3>
      <div className="self-stretch overflow-x-auto grid flex-row items-start justify-start gap-[1.312rem] max-w-full grid-cols-[repeat(3,_minmax(297px,_1fr))] mq750:grid-cols-[minmax(297px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(297px,_515px))]">
        <a className="cursor-pointer" href="">
          <HotelFrame
            hotelphoto="/hotel1@2x.png"
            hotelname="Ukraina"
            location="Київ, Центральний р-н"
            price="1600- 12300грн/ніч"
          />
        </a>
        <a className="cursor-pointer" href="">
          <HotelFrame
            hotelphoto="/hotel2@2x.png"
            hotelname="Staro Hotel"
            location="Київ, Поділ"
            price="2975- 5100грн/ніч"
          />
        </a>
        <a className="cursor-pointer" href="">
          <HotelFrame
            hotelphoto="/hotel3@2x.png"
            hotelname="Kador Home Hotel"
            location="Київ, Центральний р-н"
            price="2500- 6500грн/ніч"
          />
        </a>
      </div>
    </div>
  );
};

export default Hotels;
