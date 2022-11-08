import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const Item = ({ id, title, text, rating, btn, img, price, color, shadow }) => {
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center rounded-xl px-5 py-4 transition-all duration-700 ease-in-out w-full hover:scale-105 `}
      >
        <div className="grid items-center justify-items-center">
          <h1 className="text-xl lg:text-lg md:text-base drop-shadow filter font-medium text-slate-200">
            {title}
          </h1>
          <p className="text-base drop-shadow filter font-normal md:text-sm text-slate-200">
            {text}
          </p>
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80 px-1 rounded">
              <h1 className="text-black text-sm font-medium ">${price}</h1>
            </div>
            <div className="flex items-center gap-1 ">
              <StarIcon className="icon-style h-5 w-5 md:h-4 md:w-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200 "
              type="button"
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 text-sm shadow shadow-sky-200"
              type="button"
            >
              {btn}{" "}
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-64 h-36 transition-theme duration-200 hover:-rotate-12"
            src={img}
            alt="item-image"
          />
        </div>
      </div>
    </>
  );
};

export default Item;
