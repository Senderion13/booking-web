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
  const list = document.querySelector("#hotelFrameList");
  for (
    let index = 0;
    index < Number(window.localStorage.getItem("hotelsCount"));
    index++
  ) {
    const rawHotel = window.localStorage.getItem("hotel" + index);
    const hotel = JSON.parse(rawHotel ? rawHotel : "");
  }
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[2.25rem] max-w-full text-left text-[2.25rem] text-gray font-namu mq750:gap-[1.125rem]`}
    >
      <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-[1.375rem] mq1050:text-[1.813rem]">
        Найкращі готелі Києва
      </h3>
      <div
        id="hotelFrameList"
        className="self-stretch overflow-x-auto grid flex-row items-start justify-start gap-[1.312rem] max-w-full grid-cols-[repeat(3,_minmax(297px,_1fr))] mq750:grid-cols-[minmax(297px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(297px,_515px))]"
      >
        {}
      </div>
    </div>
  );
};

export default Hotels;
