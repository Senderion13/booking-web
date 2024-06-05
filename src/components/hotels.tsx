"use client";
import type { NextPage } from "next";
import HotelFrame from "./hotel-frame";
import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { HotelsContext } from "@/contexts/hotelsContextProvider";

export type Hotel = {
  id: number;
  title: string;
  location: string;
  rating: number;
  description: string;
  images: string[];
};

const Hotels: NextPage = () => {
  const { hotels } = useContext(HotelsContext);
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[2.25rem] max-w-full text-left text-[2.25rem] text-gray font-namu mq750:gap-[1.125rem]`}
    >
      <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-[1.375rem] mq1050:text-[1.813rem]">
<<<<<<< HEAD
        Найкращі готелі світу
=======
        Найкращі готелі Світу
>>>>>>> a7a50ca2559b0a5919e097b65f47b43bdc28aa3e
      </h3>
      <Grid container spacing={3} justifyContent={"center"}>
        {!hotels
          ? "Loading..."
          : hotels?.map((hotel) => {
              return (
                <Grid item sm={6} md={6} lg={4} key={hotel.id}>
                  <a href={"/hotel?hotelId=" + hotel.id}>
                    <HotelFrame
                      hotelphoto={
                        "http://" +
                        process.env.NEXT_PUBLIC_BASE_URL +
                        hotel.images[0]
                      }
                      hotelname={hotel.title.replace(/_/g, " ")}
                      location={hotel.location.replace(/_/g, " ")}
                      rating={hotel.rating / 2}
                    />
                  </a>
                </Grid>
              );
            })}
      </Grid>
    </div>
  );
};

export default Hotels;
