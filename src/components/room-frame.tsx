import type { NextPage } from "next";
import Image from "next/image";
import { Room } from "./rooms";
import {
  Card,
  CardActions,
  Checkbox,
  FormGroup,
  IconButton,
  Typography,
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
        <div className="self-stretch flex flex-row justify-center">
          <Image
            className="blur-[3px]"
            loading="lazy"
            alt=""
            src={
              "http://" + process.env.NEXT_PUBLIC_BASE_URL + "/images/1-1.jpg"
            }
            width={320}
            height={180}
          />
          <FormGroup className="self-stretch flex flex-column items-start justify-center m-auto">
            {room?.hasWifi ? <WifiOutlined /> : <></>}
            {room?.hasParking ? <LocalParkingOutlined /> : <></>}
            {room?.hasBar ? <LiquorOutlined /> : <></>}
            {room?.hasShower ? <ShowerOutlined /> : <></>}
            {room?.hasBreakfast ? <FastfoodOutlined /> : <></>}
          </FormGroup>
        </div>
        <Typography variant="h5">
          Кількість гостей: {room?.guests} чол.
        </Typography>
        <Typography variant="h5">Ціна: {room?.price} $/ніч</Typography>
      </Card>
    </>
  );
};

export default RoomFrame;
