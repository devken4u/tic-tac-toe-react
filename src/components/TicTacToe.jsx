import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import PlayerVsPlayer from "./PlayerVsPlayer";

export default function TicTacToe() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [gameSettings, setGameSettings] = useState({
    mode: "classic",
    versus: "pvp",
  });

  return (
    <div className="overflow-auto h-dvh bg-zinc-800 pattern">
      <div className="absolute top-0 left-0 flex items-center justify-center w-full overflow-hidden pointer-events-none h-svh">
        <div className="bg-green-400/10 size-[700px] rounded-full scale-y-[90%] blur-[120px]"></div>
      </div>
      <header className="flex items-center justify-between gap-4 px-10 py-10 sm:px-20">
        <h1 className="font-bold text-white font-montseratt min-w-[110px] sm:text-3xl">
          Tic Tac Toe{" "}
          <span className="whitespace-nowrap">
            by <span className="text-green-400">DevKen</span>
          </span>
        </h1>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center text-xl text-green-400 border border-green-400 rounded-full shadow-md bg-zinc-700 size-8 sm:size-10 sm:text-2xl hover:shadow-green-400">
            <IoMoonOutline />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <Menu
            gameSettings={gameSettings}
            setGameSettings={setGameSettings}
            setIsMenuOpen={setIsMenuOpen}
          />
        )}
      </AnimatePresence>
      {!isMenuOpen &&
        (gameSettings.versus === "pvp" ? (
          <PlayerVsPlayer
            gameSettings={gameSettings}
            setIsMenuOpen={setIsMenuOpen}
          />
        ) : (
          <h1>hello</h1>
        ))}
    </div>
  );
}
