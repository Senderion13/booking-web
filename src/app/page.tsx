import Head from "../components/head";
import Search from "../components/search";
import Hotels from "../components/hotels";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div className="w-full h-full bg-white overflow-hidden flex flex-col items-start justify-start pb-[9.875rem] box-border gap-[2.375rem] mq750:gap-[1.188rem]">
        <Head />
        <section className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[75rem] flex flex-col items-start justify-start gap-[4rem] max-w-full lg:gap-[2rem] mq750:gap-[1rem]">
            <Search />
            <Hotels />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
