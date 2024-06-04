import Head from "../components/head";
import Search from "../components/search";
import Hotels from "../components/hotels";
import Footer from "../components/footer/footer";
import { useContext } from "react";
import { createContext } from "vm";
import HotelsContextProvider from "@/contexts/hotelsContextProvider";

export default function Home() {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[2.375rem] leading-[normal] tracking-[normal] mq750:gap-[1.188rem]">
      <Head />
      <section className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
        <div className="w-[75rem] flex flex-col items-start justify-start gap-[4rem] max-w-full lg:gap-[2rem] mq750:gap-[1rem]">
          <HotelsContextProvider>
            <Search />
            <Hotels />
          </HotelsContextProvider>
        </div>
      </section>
      <Footer />
    </div>
  );
}
