import Header from "@/components/header";
import Footer from "@/components/footer/footer";
import Search from "@/components/search";
import { Rating } from "@mui/material";
import HotelDetails from "@/components/hotel-details";
import Rooms from "@/components/rooms";

export default function HotelPage() {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[2.25rem] leading-[normal] tracking-[normal] mq750:gap-[1.125rem]">
      <header className="self-stretch bg-steelblue-100 overflow-hidden flex flex-col items-center justify-start pt-[1.75rem] px-[1.25rem] pb-[1.75rem] box-border gap-[2.375rem] max-w-full text-left text-[1.5rem] text-white mq750:gap-[1.188rem]">
        <Header />
      </header>
      <section className="self-stretch flex flex-row items-start justify-center px-10 box-border max-w-full text-left text-[2.625rem]">
        <div className="w-[100rem] flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
            <div className="flex flex-col items-start justify-start gap-[0.75rem]">
              <div className="flex flex-row items-start justify-start">
                <Rating readOnly value={4.5} size="large" precision={0.5} />
              </div>
              <h1 className="m-0 relative mq450:text-[1.5rem] mq1050:text-[2.125rem]">
                Staro Hotel
              </h1>
            </div>
          </div>
          <HotelDetails />
          <h1 className="pt-16 ">Rooms</h1>
        </div>
      </section>

      <Footer />
    </div>
  );
}
