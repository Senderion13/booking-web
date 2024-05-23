export default function RoomDetails({
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
        Detail about room {params.roomId} of hotel {params.hotelId}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi dolor
        optio non placeat a ipsam ad magni facilis consequatur adipisci! Vero
        quae ducimus fugit. Voluptatibus ea fuga assumenda nisi! Ipsa at nostrum
        expedita reiciendis quasi, quod odio, enim laboriosam non, atque quidem
        corporis qui itaque officiis voluptas corrupti temporibus libero beatae!
        Maiores explicabo delectus ipsum et, debitis quia dolore eum ut rerum
        officiis, accusantium aliquam ipsa sapiente fuga quae nisi inventore.
      </p>
    </main>
  );
}
