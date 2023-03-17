import React from "react";

const ExitIcon = () => {
  return (
    <div className="group relative py-3 bg-[#9399ba] bg-opacity-40 hover:bg-opacity-80 w-10 h-10 flex flex-col justify-center items-center rounded-full hover:cursor-pointer">
      <div className="absolute w-5 bg-white h-1 rotate-45 opacity-60 group-hover:opacity-100 select-none" />
      <div className="absolute w-5 bg-white h-1 -rotate-45 opacity-60 group-hover:opacity-100 select-none" />
    </div>
  );
};

export default ExitIcon;
