"use client";
import { Hotel } from "@/components/hotels";
import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface HotelContextProps {
  hotel: Hotel;
  setHotel: (hotel: Hotel) => void;
}

export const HotelContext = createContext<HotelContextProps>(
  {} as HotelContextProps
);

const HotelContextProvider = ({ children }: { children: ReactNode }) => {
  const [hotel, setHotel] = useState<Hotel>({} as Hotel);

  const contextValue = useMemo(
    () => ({
      hotel,
      setHotel,
    }),
    [hotel, setHotel]
  );

  return (
    <HotelContext.Provider value={contextValue}>
      {children}
    </HotelContext.Provider>
  );
};

export default HotelContextProvider;
