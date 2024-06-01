import type { NextPage } from "next";
import Header from "./header";
import Image from "next/image";

export type HeadType = {
  className?: string;
  bgphoto?: string;
};

const Head: NextPage<HeadType> = ({
  className = "",
  bgphoto = "/foto@2x.png",
}) => {
  return (
    <section className="self-stretch bg-steelblue-100 overflow-hidden flex flex-col items-center justify-center pt-[2rem] pb-[7rem] box-border relative gap-[11.75rem] max-w-full text-left text-[1.5rem] text-white">
      <Image
        className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={bgphoto}
        width={1440}
        height={565}
      />
      <Header />
      <div className="w-[69rem] flex flex-col items-center justify-center py-[0rem] px-[0.625rem] box-border max-w-full text-[3.125rem] z-[1]">
        <h1 className="text-[4rem] w-full text-center">
          Заплануй неймовірний відпочинок
        </h1>
        <div className="flex-1 flex flex-col items-center justify-center pt-[3rem] pl-[3rem] pb-[0rem] box-border min-w-[28.688rem] max-w-full text-[2rem]">
          <h3 className="m-0 w-full text-center whitespace-pre-wrap mq450:text-[1.188rem]">
            Знаходьте та бронюйте вподобані номери будь-якого готелі країни. Цей
            сервіс допоможе вам обрати найкращий номер за вашими побажаннями.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Head;
