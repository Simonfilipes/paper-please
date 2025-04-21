import React from "react";
import TranslateButton from "./translateButton";

const AbtGame = () => {
  const imgBg2 = "bg2.jpg";

  return (
    <div className="bg-black text-purple-50 h-screen flex bg-cover bg-left relative border-b-2 border-white">
      <div
        className="absolute inset-0 bg-cover bg-left opacity-45"
        style={{ backgroundImage: `url(${imgBg2})`, backgroundSize: "" }}
      ></div>

      <div className="flex justify-center text-center h-screen flex-col z-10">
        <h1 className="scroll-reveal text-7xl">About Game</h1>
        <p className="scroll-reveal ml-20 mt-5 mr-20 mb-10 text-2xl">
          Katana Zero is a neo-noir action game that blends intense, fast-paced
          combat with a deeply immersive narrative. Players take on the role of
          “The Soldier,” a skilled samurai who carries out high-stakes missions
          for mysterious employers. Armed with a katana and the ability to
          manipulate time, he carefully navigates through deadly environments,
          taking down enemies with precision and avoiding fatal blows in the
          process.<br></br>
          <br></br>
          The game is set in a dystopian, cyberpunk-inspired world, where its
          pixel art aesthetics bring a unique atmosphere of tension and mystery.
          As players progress through the game, they must make quick decisions
          and master the flow of combat, where timing and strategy are key to
          survival.<br></br>
          <br></br>
          Beyond the visceral gameplay, Katana Zero delivers a complex narrative
          filled with unexpected twists. The story delves deep into themes of
          memory, trauma, and the moral consequences of violence. The Soldier’s
          journey is not only about physical combat but also about unraveling
          the mysteries of his past, as he grapples with fragmented memories and
          the truth behind his actions.<br></br>
          <br></br>
          With its stylish visual design, tight gameplay mechanics, and
          compelling story, Katana Zero offers an unforgettable experience that
          challenges players to rethink the cost of vengeance and the
          complexities of the human mind.
        </p>
        <div className="scroll-reveal">
          <a href="https://store.steampowered.com/app/460950/Katana_ZERO/">
            <TranslateButton />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AbtGame;
