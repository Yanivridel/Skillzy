import React, { useState } from "react";
import { CiCloudSun } from "react-icons/ci";
import {
  WiHot,
  WiHorizonAlt,
  WiNightAltSleet,
  WiDaySunny,
  WiHail,
  WiNightAltCloudy,
} from "react-icons/wi";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router-dom";

export default function Filter() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [rating, setRating] = useState<number>(5);
  const [price, setPrice] = useState<number>(50);

  const toggleFilterVisibility = () => setIsFilterVisible(!isFilterVisible);

  const changeParams = (
    e:
      | React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    sub: string
  ) => {
    let value: string | null = null;

    if (
      e.target instanceof HTMLSelectElement ||
      e.target instanceof HTMLInputElement
    ) {
      value = e.target.value;
    } else if (e.target instanceof HTMLButtonElement) {
      value = e.target.getAttribute("data-value");
    }

    if (value !== null) {
      searchParams.set(sub, value);
      setSearchParams(searchParams);
    }
  };

  function handleResetParams() {
    searchParams.set("title", "");
    searchParams.set("subject", "all");
    searchParams.set("price", "1000");
    searchParams.set("isGroup", "all");
    searchParams.set("level", "all");
    searchParams.set("day", "all");
    searchParams.set("hour", [0, 24].join("-"));
    setSearchParams(searchParams);
  }

  return (
    <div className="relative">
      {/* Mobile Filter Button */}
      <button
        className="fixed top-4 right-4 p-3 bg-gray-600 text-white rounded-full z-50 text-sm md:hidden shadow-lg hover:bg-gray-700"
        onClick={toggleFilterVisibility}
      >
        {isFilterVisible ? "Hide" : "Show"} Filter
      </button>

      {/* Filter Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-[100vh] bg-gray-100 text-gray-800 shadow-lg overflow-y-auto p-6 rounded-l-lg transition-transform z-40 md:block ${
          isFilterVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Filters</h2>

        {/* Search by Title */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Search</label>
          <Input
            placeholder="Search lessons"
            className="w-full bg-white text-gray-800 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-gray-500"
            onChange={(e) => changeParams(e, "title")}
          />
        </div>

        {/* Subject Selector */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            Choose Subject
          </label>
          <select
            value={searchParams.get("subject")?.toLowerCase() || "all"}
            onChange={(e) => changeParams(e, "subject")}
            className="w-full bg-white text-gray-800 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-gray-500"
          >
            <option value="all">All Subjects</option>
            <option value="mathematics">Mathematics</option>
            <option value="science">Science</option>
            <option value="computer-science">Computer Science</option>
            <option value="engineering">Engineering</option>
            {/* Add other options here */}
          </select>
        </div>

        {/* Hour Filters */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-4">Times</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { time: "9-12", icon: <CiCloudSun /> },
              { time: "12-15", icon: <WiDaySunny /> },
              { time: "15-18", icon: <WiHorizonAlt /> },
              { time: "18-21", icon: <WiHot /> },
              { time: "21-24", icon: <WiHail /> },
              { time: "0-3", icon: <WiNightAltSleet /> },
              { time: "3-6", icon: <WiNightAltCloudy /> },
              { time: "0-24", icon: <CiCloudSun /> },
            ].map(({ time, icon }) => (
              <button
                key={time}
                data-value={time}
                onClick={(e) => changeParams(e, "hour")}
                className="flex flex-col items-center justify-center p-3 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 hover:text-black transition-all"
              >
                {icon}
                <span className="text-sm">{time}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Price Slider */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            Price per Lesson
          </label>
          <div className="flex items-center">
            <span className="mr-4">${price}</span>
            <Slider
              className="flex-1"
              defaultValue={[50]}
              max={1000}
              min={50}
              step={50}
              onValueChange={(value) => {
                setPrice(value[0]);
                searchParams.set("price", value[0].toString());
                setSearchParams(searchParams);
              }}
            />
          </div>
        </div>

        {/* Rating Slider */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">By Rating</label>
          <div className="flex items-center">
            <span className="mr-4 ">{rating}</span>
            <Slider
              className="flex-1 "
              defaultValue={[5]}
              max={5}
              min={1}
              step={1}
              onValueChange={(value) => {
                setRating(value[0]);
                searchParams.set("rating", value[0].toString());
                setSearchParams(searchParams);
              }}
            />
          </div>
        </div>

        {/* Reset Filters */}
        <div className="flex justify-center">
          <button
            onClick={handleResetParams}
            className="bg-gray-600 text-white rounded-full px-6 py-2 hover:bg-gray-700 transition-all"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}
