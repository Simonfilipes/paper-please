import React from "react";
import PlayMusicButton from "./PlayMusicButton";
import Trailer from "./Trailer";


// const hero = () => {
//   return (
//     // <div className="bg-[url('/bg.jpg')] bg-cover bg-center h-screen border-white"></div>

//   )
// }

// export default hero

const hero = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* Lateral esquerda - estilo menu hamburguer, estático */}
      <div className="w-1/5 bg-gray-900 text-white p-8">
        <h1 className="text-6xl font-bold mb-4 mt-2">Paper, Please</h1>
        <ul className="space-y-2 text-2xl">
          <li><a href="http://store.steampowered.com/app/239030">Steam</a></li>
          <li><a href="https://www.humblebundle.com/store/p/papersplease_storefront">Humble</a></li>
          <li><a href="http://www.gog.com/gamecard/papers_please">GOG</a></li>
          <li><a href="https://apps.apple.com/us/app/papers-please/id935216956?ls=1">App Store</a></li>
          <li><a href="https://play.google.com/store/apps/details?id=com.llc3909.papersplease">Google Play</a></li>
          <li>--</li>
          <li>
            Congratulations. The October Labor Lottery is complete. Your name
            was pulled.
          </li>
          <li>--</li>
          <li><a href="https://simonfilipe.com">Visit My Portfolio</a></li>
          <li><a href="https://papersplea.se">Oficial Website</a></li>
          <li>--</li>
          <PlayMusicButton />
        </ul>
      </div>

      {/* Área principal - background ou conteúdo */}
      <div
        className="w-4/5 bg-cover bg-center -translate-y-65 p-8 text-white"
        style={{
          backgroundImage: "url('/bg-2.jpeg')",
          backgroundSize: "80%", // Aumenta o "zoom"
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        <Trailer />

        {/* <h2 className="text-4xl font-bold mb-4">Bem-vindo!</h2>
        <p>Aqui vai o conteúdo da sua Hero section com imagem ao fundo.</p> */}
      </div>
    </div>
  );
};

export default hero;
