"use client";
import useSWR from "swr";
import {
  Autocomplete,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  TextField,
  Stack,
} from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";
import { Hotel } from "./hotels";
import { HotelsContext } from "@/contexts/hotelsContextProvider";

const Search: NextPage = () => {
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [rating, setRating] = useState<number>(5);
  const fetcher = (url: string | URL | Request) =>
    fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSWR(
    "http://" + process.env.NEXT_PUBLIC_BASE_URL + "/hotels/all",
    fetcher
  );
  useEffect(() => {
    setHotels(data);
  }, [data]);
  const [titles, setTitles] = useState<Array<string>>();
  const { setHotels } = useContext(HotelsContext);
  const submitSearch = async () => {
    event?.preventDefault();
    let url = `http://${process.env.NEXT_PUBLIC_BASE_URL}/hotels/filter?rating=${rating}`;
    url += title != "" ? "&title=" + title : "";
    url += location != "" ? "&location=" + location : "";
    const res = await fetch(url);
    const repo = await res.json();
    setHotels(repo);
  };
  return (
    <>
      <form
        className={`self-stretch rounded bg-seashell flex flex-row items-start justify-center py-[1rem] px-[1.5rem] box-border gap-[1.5rem] max-w-full mq1050:flex-wrap `}
      >
        <div className="flex-1 rounded bg-white flex flex-row items-start justify-start py-[0.875rem] px-[1rem] box-border gap-[0.5rem] min-w-[10.875rem] max-w-full">
          <Image alt="" src="/cityicon.svg" width={30} height={30} />
          <Input
            id="title"
            placeholder="Title"
            onChange={(event) => {
              setTitle(event.target.value.replace(/ /g, "_"));
            }}
          />
        </div>
        <div className="flex-1 rounded bg-white flex flex-row items-start justify-start py-[0.875rem] px-[1rem] box-border gap-[0.5rem] min-w-[10.875rem] max-w-full">
          <Image alt="" src="/cityicon.svg" width={30} height={30} />
          <FormControl variant="standard" fullWidth>
            <Select
              id="location"
              label="Оберіть місто"
              value={location}
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            >
              <MenuItem value={""}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={"New_York"}>New York</MenuItem>
              <MenuItem value={"Los_Angeles"}>Los Angeles</MenuItem>
              <MenuItem value={"Berlin"}>Berlin</MenuItem>
              <MenuItem value={"Paris"}>Paris</MenuItem>
              <MenuItem value={"Putten"}>Putten</MenuItem>
              <MenuItem value={"Destin"}>Destin</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex-[0.6575] bg-white flex flex-row items-start justify-center py-[1.062rem] px-[4.125rem] box-border gap-[1.125rem] min-w-[10.875rem] max-w-full mq450:flex-wrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq450:flex-1">
          <Rating
            precision={0.5}
            name="simple-controlled"
            value={rating / 2}
            onChange={(event, newRating) => {
              if (newRating) {
                setRating(newRating * 2);
              }
            }}
          />
        </div>
        <button
          onClick={submitSearch}
          className="cursor-pointer [border:none] py-[1.125rem] px-[1.437rem] bg-rosybrown-100 rounded flex flex-row items-start justify-start hover:bg-rosybrown-200"
        >
          <div className="relative text-[1.125rem] font-namu text-white text-left inline-block min-w-[3.875rem]">
            Пошук
          </div>
        </button>
      </form>
    </>
  );
};
export default Search;

/*
<Autocomplete
            id="title"
            autoComplete
            fullWidth
            options={titles ? titles : [""]}
            renderInput={(params) => (
              <TextField {...params} label="Hotel title" />
            )}
          />
*/
