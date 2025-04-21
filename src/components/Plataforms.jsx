import React from "react";

const Plataforms = () => {
  return (
    <div className="bg-cover bg-center h-screen border-white">
      <div className="flex items-center mx-auto flex-col">
        <h1 className="scroll-reveal text-6xl text-white m-10">Plataforms</h1>


        <div className="flex justify-center flex-col items-center">

          <div className="flex flex-row justify-center m-5 items-center">
            <img className="h-30 w-90 m-5" src="steam.png" alt="steam" />
            <img className="w-90 h-30 m-5" src="xbox.png" alt="xbox" />
            <img className="w-50 h-50 m-5" src="gog.png" alt="gog" />
          </div>

          <div className="flex flex-row justify-center m-5 items-center">
            <img className="w-90 h-30 m-5" src="humble.png" alt="humble" />
            <img className="w-80 h-80 m-5" src="nintendo.png" alt="nintendo"/>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Plataforms;
