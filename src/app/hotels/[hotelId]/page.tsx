export default function HotelDetails({
  params,
}: {
  params: { hotelId: string };
}) {
  return <h1>Details about Hotel {params.hotelId}</h1>;
}
