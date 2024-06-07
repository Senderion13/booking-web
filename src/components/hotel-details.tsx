import Carousel from "@/components/carousel";
import { HotelContext } from "@/contexts/hotelContextProvider";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import { Hotel } from "./hotels";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";

export default function HotelDetails() {
  const { setHotel } = useContext(HotelContext);
  const searchParams = useSearchParams();
  const hotelId = searchParams.get("hotelId");

  const fetcher = (url: string | URL | Request) =>
    fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSWR(
    "http://" + process.env.NEXT_PUBLIC_BASE_URL + "/hotels/" + hotelId,
    fetcher
  );
  useEffect(() => {
    setHotel(data);
  });
  return (
    <section className="self-stretch flex flex-row items-start justify-center px-10 box-border max-w-full text-left text-[2.625rem]">
      <div className="w-[100rem] flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
        <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
          <div className="flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="flex flex-row items-start justify-start">
              <Rating
                readOnly
                value={data?.rating / 2}
                size="large"
                precision={0.5}
              />
            </div>
            <h1 className="m-0 relative mq450:text-[1.5rem] mq1050:text-[2.125rem]">
              {data?.title?.replace(/_/g, " ")}
            </h1>
          </div>
        </div>
        <div className="w-[100rem] flex flex-row items-start justify-start box-border max-w-full text-left text-[1rem]">
          <div className="flex-1 flex flex-row items-start justify-start max-w-full mq1050:flex-wrap">
            <div className="mr-5 flex-1 flex flex-row items-start justify-between box-border min-w-[40rem] max-w-full mq450:flex-wrap mq750:box-border mq750:min-w-full">
              <Carousel />
            </div>
            <div className="w-[40rem] flex flex-col items-start justify-start pt-[3rem] box-border min-w-[22rem] max-w-full mq450:pt-[1.75rem] mq450:box-border mq450:min-w-full mq1050:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full mq450:gap-[1.688rem]">
                <div className="flex flex-col items-start justify-start box-border max-w-[32rem] whitespace-pre-line leading-[2rem]">
                  {data?.description}
                </div>
                <div className="w-[16.4rem] flex flex-row px-[0.125rem] box-border">
                  <Button
                    className="h-[3.313rem] flex-1"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#ef8a84",
                      borderRadius: "4px",
                      "&:hover": { background: "#ef8a84" },
                      height: 53,
                    }}
                  >
                    ЗАТЕЛЕФОНУВАТИ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
