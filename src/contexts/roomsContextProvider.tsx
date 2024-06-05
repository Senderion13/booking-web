"use client";
import { Room } from "@/components/rooms";
import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface RoomsContextProps {
  rooms: Room[];
  setRooms: (rooms: Room[]) => void;
}

export const RoomsContext = createContext<RoomsContextProps>(
  {} as RoomsContextProps
);

const RoomsContextProvider = ({ children }: { children: ReactNode }) => {
  const [rooms, setRooms] = useState<Room[]>([]);

  const contextValue = useMemo(
    () => ({
      rooms,
      setRooms,
    }),
    [rooms, setRooms]
  );

  return (
    <RoomsContext.Provider value={contextValue}>
      {children}
    </RoomsContext.Provider>
  );
};

export default RoomsContextProvider;
