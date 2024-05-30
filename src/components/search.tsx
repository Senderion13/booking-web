import type { NextPage } from "next";
import Image from "next/image";

export type SearchType = {
  className?: string;
};

const Search: NextPage<SearchType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded bg-seashell flex flex-row items-start justify-center py-[1rem] px-[1.5rem] box-border gap-[1.5rem] max-w-full mq1050:flex-wrap ${className}`}
    >
      <div className="flex-1 rounded bg-white flex flex-row items-start justify-start py-[0.875rem] px-[1rem] box-border gap-[0.5rem] min-w-[10.875rem] max-w-full mq450:flex-wrap">
        <Image
          className="h-[1.875rem] w-[1.875rem] relative rounded overflow-hidden shrink-0"
          alt=""
          src="/cityicon.svg"
          width={30}
          height={30}
        />
        <div className="w-[9rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
          <input
            className="[border:none] [outline:none] font-namu text-[1.125rem] bg-[transparent] self-stretch h-[1.375rem] relative text-black text-left inline-block min-w-[5.375rem] p-0"
            placeholder="Оберіть місто"
            type="text"
          />
        </div>
      </div>
      <div className="flex-1 rounded bg-white flex flex-row items-start justify-start py-[0.875rem] px-[1rem] box-border gap-[0.5rem] min-w-[10.875rem] max-w-full mq450:flex-wrap">
        <Image
          className="h-[1.875rem] w-[1.875rem] relative rounded overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/peopleicon.svg"
          width={30}
          height={30}
        />
        <div className="w-[9rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
          <input
            className="[border:none] [outline:none] font-namu text-[1.125rem] bg-[transparent] self-stretch h-[1.375rem] relative text-black text-left inline-block min-w-[5.375rem] p-0"
            placeholder="Кількість людей"
            type="text"
          />
        </div>
      </div>
      <div className="flex-[0.6575] bg-white flex flex-row items-start justify-center py-[1.062rem] px-[4.125rem] box-border gap-[1.125rem] min-w-[10.875rem] max-w-full mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq450:flex-1">
        <Image
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
          loading="lazy"
          alt=""
          src="/star-1.svg"
          width={24}
          height={24}
        />
        <Image
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
          loading="lazy"
          alt=""
          src="/star-2.svg"
          width={24}
          height={24}
        />
        <Image
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
          loading="lazy"
          alt=""
          src="/star-2.svg"
          width={24}
          height={24}
        />
        <Image
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
          loading="lazy"
          alt=""
          src="/star-2.svg"
          width={24}
          height={24}
        />
        <Image
          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
          loading="lazy"
          alt=""
          src="/star-2.svg"
          width={24}
          height={24}
        />
      </div>
      <button className="cursor-pointer [border:none] py-[1.125rem] px-[1.437rem] bg-rosybrown-100 rounded flex flex-row items-start justify-start hover:bg-rosybrown-200">
        <div className="relative text-[1.125rem] font-namu text-white text-left inline-block min-w-[3.875rem]">
          Пошук
        </div>
      </button>
    </div>
  );
};

export default Search;
