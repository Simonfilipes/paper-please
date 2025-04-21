import React from "react";
import PlayMusicButton from "./PlayMusicButton";

const header = () => {
  return (
    <div
      className=" from-black to-purple-600 p-20"
      style={{ backgroundSize: "100% 100%" }}
    >
      <div className="mt-3 flex flex-row justify-between -translate-y-18">
        <div className="logo">
          <img
            src="logo.webp"
            className="w-40 h-20 object-contain"
            alt="logo"
          />
        </div>

        <div className="li"></div>

        <div className="flex justify-center items-center">
          <PlayMusicButton />
        </div>
      </div>
    </div>
  );
};

export default header;
