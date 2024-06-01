export default function Footer() {
  return (
    <footer className="mt-12 self-stretch bg-steelblue-200 py-[1.8rem] px-[2.6rem] mq750:py-[1.8rem] mq750:px-[2.6rem]">
      <div className="flex-1 rounded bg-white flex flex-row justify-between py-[1.4rem] px-[2.6rem] items-center  mq750:py-[0.8rem] mq750:px-[1.6rem]">
        <a className="cursor-pointer relative text-[1.5rem] mq750:text-[1.2rem]">
          Booking.UA
        </a>
        <div className="flex flex-col">
          <div className="relative leading-[140%]">
            2024 © All rights reserved
          </div>
        </div>
        <a className="cursor-pointer flex flex-col">
          <div className="relative ">Наша команда</div>
        </a>
      </div>
    </footer>
  );
}
