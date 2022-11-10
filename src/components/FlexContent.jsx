import React from "react";

const FlexContent = ({ endpoint: { heading, title, text, btn, url, img } }) => {
  return (
    <>
      <div
        className={`nike-container flex items-center justify-between lg:flex-col lg:justify-center`}
      >
        <div className="max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center">
          <h1 className="text-4xl sm:text-3xl font-bold text-gradient">
            {heading}
          </h1>
          <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold drop-shadow-lg text-slate-900 filter">
            {title}
          </h1>
          <p className="xl:text-sm my-4">{text}</p>
          <a
            className="flex items-center"
            target={"_blank"}
            href={url}
            role="button"
          >
            <button className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5">
              {btn}
            </button>
          </a>
        </div>
        <div className="flex items-center justify-center max-w-xl lg:max-w-none w-full relative ">
          <img
            className="object-fill w-full transitions-theme"
            src={img}
            alt={`img/${heading}`}
          />
        </div>
      </div>
    </>
  );
};

export default FlexContent;
