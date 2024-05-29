import type { NextPage } from "next";
import Image from "next/image";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between z-[1] text-center text-[1.5rem] text-white font-namu mq450:flex-wrap ${className}`}
    >
      <div className="flex flex-row items-start justify-start p-[0.625rem]">
        <a className="[text-decoration:none] relative text-[inherit] mq450:text-[1.188rem]">
          Booking.UA
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem] text-[1rem]">
        <div className="flex flex-row items-start justify-start p-[0.625rem] gap-[0.1rem]">
          <Image
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
            loading="lazy"
            alt=""
            src="/users-1.svg"
            width={24}
            height={24}
          />
          <div className="flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem]">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[7.5rem]">
              Наша команда
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
