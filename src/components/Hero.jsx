import React from "react";
import Clips from "./utils/Clips";
import Socialicon from "./utils/Socialicon";

const Hero = ({
  heroapi: { title, img, subtitle, sociallinks, btntext, videos },
}) => {
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 right-0 left-0 opacity-100 z-10"></div>
        <div className="relative z-20 opacity-100 grid justify-items-center items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl text-slate-200 drop-shadow-sm filter font-extrabold ">
              {title}
            </h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl text-slate-200 drop-shadow-sm filter font-extrabold ">
              {subtitle}
            </h1>
            <button className="button-theme bg-slate-200 my-5 shadow-slate-200 rounded-xl">
              {btntext}
            </button>
            <div className="grid gap-5 lg:gap-3 absolute left-[11%] lg:left-0 top-[35vh] lg:top-[27vh] h-auto w-auto">
              {videos?.map((val, i) => (
                <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
              ))}
            </div>
            <div className="grid gap-3 absolute top-[33vh] lg:top-[27vh] right-0 ">
              {sociallinks?.map((val, i) => (
                <Socialicon key={i} icon={val.icon}></Socialicon>
              ))}
            </div>
          </div>
          <div className="">
            <img
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme cursor-pointer -rotate-[25deg] hover:rotate-0 object-fill"
              src={img}
              alt="hero-shoe-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
