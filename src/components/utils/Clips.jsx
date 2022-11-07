import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

const Clips = ({ imgsrc, clip }) => {
  return (
    <>
      <div className="group transition-all duration-300 h-28 w-32 relative overflow-hidden rounded-xl lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14">
        <img
          className="inset-0 transition-opacity duration-500 absolute top-0 right-0 left-0 z-10 opacity-100 w-full h-full rounded-xl object-cover "
          src={imgsrc}
          alt="img/clips"
        />
        <div className="bg-slate-200 absolute top-11 left-11 lg:left-9 lg:top-8 sm:left-5 sm:top-4 z-[100] w-8 h-8 md:w-5 md:h-5 opacity-100 rounded-full blur-effect-theme flex items-center justify-center  ">
          <PlayIcon className=" text-slate-900 md:h-3 md:w-3 icon-style" />
        </div>
        <video
          loop={true}
          autoPlay={true}
          playsInline={true}
          muted={true}
          className="absolute group-hover:z-50 group-hover:opacity-100 trans top-0 right-0 left-0 z-0 w-full h-full object-cover opacity-0"
        >
          <source type="video/mp4" src={clip} />
        </video>
      </div>
    </>
  );
};

export default Clips;
