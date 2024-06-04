"use client";
import type { NextPage } from "next";
import RoomFrame from "@/components/room-frame";

export type Rooms = {
  id: number;
  title: string;
  location: string;
  rating: number;
  description: string;
};

export default function Rooms() {
  return (
    <div>
      <div>Rooms</div>
    </div>
  );
}
