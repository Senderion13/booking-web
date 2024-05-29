import type { NextPage } from "next";
import Image from "next/image";

export type HotelFrame = {
  className?: string;
  hotelphoto: string;
  hotelname?: string;
  location?: string;
  price?: string;
};

const HotelFrame: NextPage<HotelFrame> = ({
  className = "",
  hotelphoto,
  hotelname,
  location,
  price,
}) => {
  return (
    <div className="self-stretch flex-1 rounded bg-seashell overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[1.312rem] px-[1.25rem] pb-[2rem] box-border gap-[0.75rem] max-w-full mq750:pt-[1.25rem] mq750:pb-[1.313rem] mq750:box-border">
      <Image
        className={
          "self-stretch flex-1 relative rounded max-w-full overflow-hidden max-h-full object-cover"
        }
        loading="lazy"
        alt=""
        src={hotelphoto}
        width={526}
        height={353}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] mq450:gap-[1rem]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-end">
            <div className="flex flex-row items-start justify-start gap-[1.125rem]">
              <Image
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                src="/star-1-1.svg"
                width={24}
                height={24}
              />
              <Image
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                src="/star-1-1.svg"
                width={24}
                height={24}
              />
              <Image
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                src="/star-1-1.svg"
                width={24}
                height={24}
              />
              <Image
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                src="/star-1-1.svg"
                width={24}
                height={24}
              />
              <Image
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
                loading="lazy"
                alt=""
                src="/star-1-1.svg"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <h3 className="m-0 relative text-inherit font-normal font-inherit mq450:text-[1.375rem] mq1050:text-[1.813rem]">
              {hotelname}
            </h3>
            <div className="relative text-[1rem] text-black">{location}</div>
          </div>
        </div>
        <div className="relative text-[1.5rem] text-black mq450:text-[1.188rem]">
          {price}
        </div>
        <div className="flex flex-row items-end justify-start gap-[1rem]">
          <Image
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
            loading="lazy"
            alt=""
            src="/wifi.svg"
            width={24}
            height={24}
          />
          <Image
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
            loading="lazy"
            alt=""
            src="/pets.svg"
            width={24}
            height={24}
          />
          <Image
            className="h-[1.438rem] w-[1.688rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/breakfast.svg"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelFrame;
