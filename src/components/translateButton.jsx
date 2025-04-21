import React from "react";

const translateButton = () => {
  const handleClick = () => {
    console.log("oi");
  };

  return (
    <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 w-45 h-15 text-2xl bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
      Buy Now
    </button>
  );
};

export default translateButton;
