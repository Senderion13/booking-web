"use client";
import Header from "@/components/header";
import Footer from "@/components/footer/footer";
import Search from "@/components/search";
import { Rating } from "@mui/material";
import HotelDetails from "@/components/hotel-details";
import Rooms from "@/components/rooms";
import { useContext, useState } from "react";
import HotelContextProvider, {
  HotelContext,
} from "@/contexts/hotelContextProvider";
import RoomsContextProvider from "@/contexts/roomsContextProvider";

export default function HotelPage() {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[2.25rem] leading-[normal] tracking-[normal] mq750:gap-[1.125rem]">
      <header className="self-stretch bg-steelblue-100 overflow-hidden flex flex-col items-center justify-start pt-[1.75rem] px-[1.25rem] pb-[1.75rem] box-border gap-[2.375rem] max-w-full text-left text-[1.5rem] text-white mq750:gap-[1.188rem]">
        <Header />
      </header>
      <HotelContextProvider>
        <HotelDetails />
      </HotelContextProvider>
      <RoomsContextProvider>
        <Rooms />
      </RoomsContextProvider>
      <Footer />
    </div>
  );
}
