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

interface HotelsContextProps {
  hotels: Hotel[];
  setHotels: (hotels: Hotel[]) => void;
}

export const HotelsContext = createContext<HotelsContextProps>(
  {} as HotelsContextProps
);

const HotelsContextProvider = ({ children }: { children: ReactNode }) => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  const contextValue = useMemo(
    () => ({
      hotels,
      setHotels,
    }),
    [hotels, setHotels]
  );

  return (
    <HotelsContext.Provider value={contextValue}>
      {children}
    </HotelsContext.Provider>
  );
};

export default HotelsContextProvider;
