import Carousel from "@/components/carousel";
import Button from "@mui/material/Button";

export default function HotelDetails() {
  return (
    <div className="w-[100rem] flex flex-row items-start justify-start box-border max-w-full text-left text-[1rem]">
      <div className="flex-1 flex flex-row items-start justify-start max-w-full mq1050:flex-wrap">
        <div className="mr-5 flex-1 flex flex-row items-start justify-between box-border min-w-[40rem] max-w-full mq450:flex-wrap mq750:box-border mq750:min-w-full">
          <Carousel />
        </div>
        <div className="w-[40rem] flex flex-col items-start justify-start pt-[3rem] box-border min-w-[22rem] max-w-full mq450:pt-[1.75rem] mq450:box-border mq450:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full mq450:gap-[1.688rem]">
            <div className="self-stretch flex flex-row items-start justify-start text-[1.25rem] text-steelblue-100">
              <div className="h-[3rem] relative leading-[1.5rem] inline-block mq450:text-[1rem]">
                <p className="m-0">
                  <span className="text-gray">Офіційний сайт:</span>
                  <span className="[text-decoration:underline]">
                    sitestarohotel.com
                  </span>
                </p>
                <p className="m-0 text-gray">Тел. +38095123345 </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start box-border max-w-[32rem] whitespace-pre-line leading-[2rem]">
              Located in New York, a 6-minute walk from Bryant Park,
              Margaritaville Resort Times Square provides accommodations with a
              fitness center, private parking, a terrace and a restaurant. This
              4-star hotel offers room service and a concierge service. The
              property is 600 yards from the city center and a 7-minute walk
              from Macy`s. A continental breakfast is available daily at the
              hotel. Speaking Mandarin, German, English and Spanish at the
              reception, staff will be happy to provide guests with practical
              guidance on the area. Popular points of interest near
              Margaritaville Resort Times Square include Madison Square Garden,
              Times Square and Grand Central Station. The nearest airport is
              LaGuardia Airport, 7.5 miles from the accommodation. Couples in
              particular like the location – they rated it 9.5 for a two-person
              trip.
            </div>
            <div className="w-[16.4rem] flex flex-row px-[0.125rem] box-border">
              <Button
                className="h-[3.313rem] flex-1"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#ef8a84",
                  borderRadius: "4px",
                  "&:hover": { background: "#ef8a84" },
                  height: 53,
                }}
              >
                ЗАТЕЛЕФОНУВАТИ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
