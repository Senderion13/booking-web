"use client";
import type { NextPage } from "next";
import RoomFrame from "@/components/room-frame";
import { useContext, useEffect, useState } from "react";
import { RoomsContext } from "@/contexts/roomsContextProvider";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";

export type Room = {
  id: number;
  price: number;
  guests: number;
  hasWifi: boolean;
  hasParking: boolean;
  hasBar: boolean;
  hasShower: boolean;
  hasBreakfast: boolean;
  image: string;
};

export default function Rooms() {
  const searchParams = useSearchParams();
  const hotelId = searchParams.get("hotelId");
  const { rooms, setRooms } = useContext(RoomsContext);
  const fetcher = (url: string | URL | Request) =>
    fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSWR(
    "http://" +
      process.env.NEXT_PUBLIC_BASE_URL +
      "/rooms/filter?hotelId=" +
      hotelId,
    fetcher
  );
  useEffect(() => {
    setRooms(data);
    console.log(data);
  }, [data]);
  return (
    <div className="self-stretch overflow-x-auto grid flex-row items-start justify-start gap-[1.312rem] max-w-full grid-cols-[repeat(3,_minmax(297px,_1fr))] mq750:grid-cols-[minmax(297px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(297px,_515px))]">
      {rooms?.map((room) => (
        <RoomFrame key={room.id} room={room} />
      ))}
    </div>
  );
}
