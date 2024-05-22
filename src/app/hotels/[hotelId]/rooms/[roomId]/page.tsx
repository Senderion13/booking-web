export default function RoomDetails({
  params,
}: {
  params: {
    hotelId: string;
    roomId: string;
  };
}) {
  return (
    <h1>
      Details about room {params.roomId} of Hotel {params.hotelId}
    </h1>
  );
}
