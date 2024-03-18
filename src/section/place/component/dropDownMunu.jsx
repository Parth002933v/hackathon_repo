import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { onCategoryChange } from '../mapPlaceSlice'

export default function DropDownMenu() {
  const place = useSelector((state) => state.place)
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {

    dispatch(onCategoryChange(value))

    setIsOpen(false);
  };

  return (
    <div className="relative font-sans w-full">

      <ul className=" shadow-lg bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto">
        <li
          className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {place.category}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-2 fill-gray-500 inline ml-3 ${isOpen && 'rotate-180'}`}
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clipRule="evenodd"
              data-original="#000000"
            />
          </svg>
        </li>

      </ul>
      {isOpen && (
        <ul className="absolute shadow-lg bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto">

          <li
            className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
            onClick={() => handleSelect("all")}
          >
            All
          </li>
          <li
            className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
            onClick={() => handleSelect("stay")}
          >
            Stays
          </li>
          <li
            className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
            onClick={() => handleSelect("toilets")}
          >
            toilets
          </li>
          <li
            className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
            onClick={() => handleSelect("food_stalls")}
          >
            food_stalls
          </li>
          <li
            className="py-3 px-6 hover:bg-gray-100 text-black text-sm cursor-pointer"
            onClick={() => handleSelect("colleges")}
          >
            colleges
          </li>
        </ul>
      )}
    </div>
  );
}
