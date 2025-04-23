import React from "react";
import PlayMusicButton from "./PlayMusicButton";
import Trailer from "./Trailer";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen overflow-hidden">
      {/* Lateral esquerda - menu */}
      <div className="w-full lg:w-1/5 bg-gray-900 text-white p-4 lg:p-8 overflow-y-auto">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 mt-2 leading-tight">
          Papers, Please
        </h1>

        <ul className="space-y-3 text-xl lg:text-2xl">
          <li>
            <a
              href="http://store.steampowered.com/app/239030"
              className="hover:text-blue-400 transition-colors duration-200 block py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Steam
            </a>
          </li>
          <li>
            <a
              href="https://www.humblebundle.com/store/p/papersplease_storefront"
              className="hover:text-blue-400 transition-colors duration-200 block py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Humble
            </a>
          </li>
          <li>
            <a
              href="http://www.gog.com/gamecard/papers_please"
              className="hover:text-blue-400 transition-colors duration-200 block py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOG
            </a>
          </li>
          <li>
            <a
              href="https://apps.apple.com/us/app/papers-please/id935216956?ls=1"
              className="hover:text-blue-400 transition-colors duration-200 block py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.llc3909.papersplease"
              className="hover:text-blue-400 transition-colors duration-200 block py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play
            </a>
          </li>
          {/* Outros links similares com as mesmas classes */}

          <li className="border-t border-gray-700 my-3"></li>

          <li className="text-sm lg:text-base italic text-gray-300 py-2">
            Congratulations. The October Labor Lottery is complete. Your name
            was pulled.
          </li>

          <li className="border-t border-gray-700 my-3"></li>

          <li>
            <a
              href="https://simonfilipe.com"
              className="hover:text-blue-400 transition-colors duration-200 block py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit My Portfolio
            </a>
          </li>
          <li>
            <a
              href="https://papersplea.se"
              className="hover:text-blue-400 transition-colors duration-200 block py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Oficial Website
            </a>
          </li>
        </ul>
        
        <div className="fixed bottom-0 left-0 p-4">
          <PlayMusicButton />
        </div>
        
      </div>

      {/* Área principal */}
      <div className="relative flex-1 flex items-center justify-center bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg.png')",
          }}
        ></div>

        <div className="absolute z-20 w-full max-w-4xl px-4">
          <Trailer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
