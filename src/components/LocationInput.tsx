"use client";
import { forwardRef, useMemo, useState } from "react";
import { Input } from "./ui/input";
import citiesList from "@/lib/cities-list";
interface LocationInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onLocationSelected: (location: string) => void;
}
export default forwardRef<HTMLInputElement, LocationInputProps>(
  function LocationInput({ onLocationSelected, ...props }, ref) {
    const [locationSearchInput, setLocationSerachInput] = useState("");
    const [hasFocus, setHasFocus] = useState(false);
    const cities = useMemo(() => {
      if (!locationSearchInput.trim()) return [];
      const searchWords = locationSearchInput.split(" ");
      return citiesList
        .map((city) => `${city.name},${city.subcountry},${city.country}`)
        .filter(
          (city) =>
            city.toLowerCase().startsWith(searchWords[0].toLowerCase()) &&
            searchWords.every((word) =>
              city.toLowerCase().includes(word.toLowerCase()),
            ),
        )
        .slice(0, 5);
    }, [locationSearchInput]);
    return (
      <div className="relative">
        <Input
          placeholder="Search for a city"
          type="search"
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          {...props}
          ref={ref}
          value={locationSearchInput}
          onChange={(e) => setLocationSerachInput(e.target.value)}
        />
        {locationSearchInput.trim() && hasFocus && (
          <div className="absolute z-20 w-full divide-y rounded-b-lg border-x border-b bg-background shadow-xl">
            {!cities.length && <p className="p-3">No results found</p>}
            {cities.map((city) => (
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  onLocationSelected(city);
                  setLocationSerachInput("");
                }} // onMouseDown Because we want to prevent the input from losing focus when the user clicks on a city because This Is a little bit Faster than onClick
                type="button"
                key={city}
                className="block w-full p-2 text-start"
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  },
);
