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
    <section
      className={`self-stretch bg-steelblue overflow-hidden flex flex-col items-start justify-start pt-[1.937rem] pb-[7.312rem] pr-[8.937rem] pl-[9.25rem] box-border relative gap-[11.75rem] max-w-full text-left text-[1.5rem] text-white font-namu mq450:gap-[2.938rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:gap-[5.875rem] mq750:pt-[1.25rem] mq750:pb-[4.75rem] mq750:pr-[4.438rem] mq750:pl-[4.625rem] mq750:box-border ${className}`}
    >
      <Image
        className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={bgphoto}
        width={1440}
        height={565}
      />
      <Header />
      <div className="w-[68.438rem] flex flex-row items-start justify-center py-[0rem] px-[0.625rem] box-border max-w-full text-[3.125rem]">
        <div className="flex flex-row items-start justify-between gap-[1.25rem] max-w-full lg:flex-wrap ">
          <h1 className="m-0 w-[21.813rem] relative text-inherit font-normal font-inherit inline-block shrink-0 min-w-[21.813rem] max-w-full z-[1] lg:flex-1 mq450:text-[1.875rem] mq750:min-w-full mq1050:text-[2.5rem]">
            Заплануй неймовірний відпочинок
          </h1>
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.906rem] px-[0rem] pb-[0rem] box-border min-w-[28.688rem] max-w-full text-[1.5rem] mq1050:min-w-full">
            <div className="self-stretch relative whitespace-pre-wrap z-[1] mq450:text-[1.188rem]">
              <p>
                Знаходь та бронюй вподобані номери будь-якого готелі країни. Цей
                сервіс допоможе тобі обрати найкращий номер за твоїми
                побажаннями.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
