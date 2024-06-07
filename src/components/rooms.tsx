"use client";
import type { NextPage } from "next";
import RoomFrame from "@/components/room-frame";
import { useContext, useEffect, useState } from "react";
import { RoomsContext } from "@/contexts/roomsContextProvider";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import { Container, Grid } from "@mui/material";

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
  }, [data]);
  return (
    <Container fixed maxWidth="lg">
      <Grid container spacing={12} justifyContent={"center"}>
        {rooms?.map((room) => (
          <Grid item sm={12} md={6} lg={6} key={room.id}>
            <RoomFrame key={room.id} room={room} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
