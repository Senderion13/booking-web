import Link from "next/link";

export default function HotelDetails({
  params,
}: {
  params: {
    hotelId: number;
    roomId: number;
  };
}) {
  return (
    <main className="flex min-h-fit flex-col items-center justify-between p-12">
      <h1 className="font-bold mb-40 text-4xl">
        Details about hotel {params.hotelId}
      </h1>
      <div className="grid grid-cols-3 gap-20 items-center justify-evenly">
        <button className="bg-blue-500 rounded-md px-4 py-2">
          <Link href={`/${params.hotelId}/1`}>Room 1</Link>
        </button>
        <button className="bg-blue-500 rounded-md px-4 py-2">
          <Link href={`/${params.hotelId}/2`}>Room 2</Link>
        </button>
        <button className="bg-blue-500 rounded-md px-4 py-2">
          <Link href={`/${params.hotelId}/3`}>Room 3</Link>
        </button>
        <button className="bg-blue-500 rounded-md px-4 py-2">
          <Link href={`/${params.hotelId}/4`}>Room 4</Link>
        </button>
        <button className="bg-blue-500 rounded-md px-4 py-2">
          <Link href={`/${params.hotelId}/5`}>Room 5</Link>
        </button>
        <button className="bg-blue-500 rounded-md px-4 py-2">
          <Link href={`/${params.hotelId}/6`}>Room 6</Link>
        </button>
      </div>
    </main>
  );
}

/*import Link from "next/link";
import { GetStaticProps } from "next";
*/
