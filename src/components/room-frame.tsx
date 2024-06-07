import type { NextPage } from "next";
import Image from "next/image";
import { Room } from "./rooms";
import {
  Card,
  CardContent,
  CardMedia,
  FormGroup,
  Tooltip,
} from "@mui/material";
import {
  BreakfastDining,
  BreakfastDiningOutlined,
  Fastfood,
  FastfoodOutlined,
  Liquor,
  LiquorOutlined,
  LocalParkingOutlined,
  LocalParkingRounded,
  Shower,
  ShowerOutlined,
  Wifi,
  WifiOutlined,
} from "@mui/icons-material";

export type RoomFrame = {
  className?: string;
  room?: Room;
};

const RoomFrame: NextPage<RoomFrame> = ({ className = "", room }) => {
  return (
    <>
      <Card variant="outlined">
        <CardMedia
          component="img"
          height={200}
          width={200}
          image={
            "http://" + process.env.NEXT_PUBLIC_BASE_URL + "/images/1-1.jpg"
          }
          alt="room"
        />
        <CardContent>
          <FormGroup className="self-stretch flex flex-row items-start justify-center m-auto gap-[0.75rem]">
            {room?.hasWifi ? (
              <Tooltip placement="top" title="Wi-Fi">
                <WifiOutlined />
              </Tooltip>
            ) : null}
            {room?.hasParking ? (
              <Tooltip placement="top" title="Parking">
                <LocalParkingOutlined />
              </Tooltip>
            ) : null}
            {room?.hasBar ? (
              <Tooltip placement="top" title="Bar">
                <LiquorOutlined />
              </Tooltip>
            ) : null}
            {room?.hasShower ? (
              <Tooltip placement="top" title="Shower">
                <ShowerOutlined />
              </Tooltip>
            ) : null}
            {room?.hasBreakfast ? (
              <Tooltip placement="top" title="Breakfast">
                <FastfoodOutlined />
              </Tooltip>
            ) : null}
          </FormGroup>
        </CardContent>

        <div className="text-[1.3rem] text-center">
          <p className="font-medium text-gray-500">
            Кількість гостей: {room?.guests}
          </p>
          <h3 className="font-bold mb-2">Ціна: {room?.price} $/ніч</h3>
        </div>
      </Card>
    </>
  );
};

export default RoomFrame;
