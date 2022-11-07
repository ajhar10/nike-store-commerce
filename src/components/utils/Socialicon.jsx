import React from "react";

const Socialicon = ({ icon }) => {
  return (
    <>
      <img
        src={icon}
        alt="icon/social"
        className="w-9 h-9 md:h-6 md:w-6 sm:h-5 sm:w-5 flex items-center transition-all duration-200 cursor-pointer hover:scale-110"
      />
    </>
  );
};

export default Socialicon;
