import React, { useState } from "react";

export interface SearchBarProps {
  onSearch: (city: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim()) {
      const currentCity = city.trim();
      try {
        onSearch(currentCity);
      } catch (error) {
        setCity("");
      }
      setCity("");
    } else {
      alert("Please enter a city name");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city name"
          className="border-2 border-gray-300 rounded-lg p-2 w-full"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="border-2 cursor-pointer rounded-lg border-gray-300 px-3 py-1 flex items-center gap-1"
        >
          <span aria-hidden="true">🔍</span>
          <span>Search</span>
        </button>
      </div> */}
      <div className="flex  items-center justify-between ">
        <div>
          <span className="text-2xl font-bold text-purple-800 tracking-tight">
            Vatavaran
          </span>
        </div>
        <div className="bg-white rounded-lg py-1 px-2  flex items-center">
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-64 bg-transparent text-black placeholder:text-gray-500 outline-none"
            placeholder="Enter city name"
          />
          <button
            type="submit"
            className="ml-2 p-2 cursor-pointer rounded-4xl hover:bg-neutral-200 bg-white text-black transition-colors"
            aria-label="Search by city"
            title="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
