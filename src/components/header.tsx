import Image from "next/image";

export default function Header() {
  return (
    <div className="px-6 self-stretch flex flex-row items-start justify-between text-center text-[1.5rem] text-white font-namu mq450:flex-wrap">
      <div className="flex flex-row items-start justify-start p-[0.625rem]">
        <a
          href="/"
          className="cursor-pointer [text-decoration:none] relative text-[inherit]"
        >
          Booking.UA
        </a>
      </div>
      <div className="cursor-pointer flex flex-col items-start justify-start pt-[0.156rem] px-[0rem] pb-[0rem] text-[1rem]">
        <a
          href="our-team"
          className="flex flex-row items-start justify-start p-[0.35rem] gap-[0.1rem]"
        >
          <Image
            className="relative overflow-hidden shrink-0 min-h-[1.5rem]"
            loading="lazy"
            alt=""
            src="/users-1.svg"
            width={24}
            height={24}
          />
          <div className="flex flex-col items-center justify-center pt-[0.156rem]">
            <p className="[text-decoration:none] relative text-[inherit] inline-block min-w-[7.5rem]">
              Наша команда
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
