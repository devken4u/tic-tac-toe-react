import Cell from "./Cell";
import { RiCloseLargeFill } from "react-icons/ri";
import { MdOutlineCircle } from "react-icons/md";
import { useGameContext } from "../customHook/useGameContext";
import { cn } from "../utils/utils";

export default function GameTable({ gameTable }) {
  const data = useGameContext();

  return (
    <div className="relative z-10 shrink-0 min-w-[264px]">
      <div className="flex justify-end gap-4 py-4">
        <button
          onClick={() => data.setIsMenuOpen(true)}
          className="px-4 py-1 text-sm font-bold text-green-400 rounded-md shadow-sm md:text-lg md:px-6 active:scale-95 bg-zinc-800 shadow-green-400"
        >
          MENU
        </button>
        <button
          onClick={() => {
            data.setGameTable([0, 0, 0, 0, 0, 0, 0, 0, 0]);
            data.setPlayerOneMoves([0, 0, 0, 0, 0, 0, 0, 0, 0]);
            data.setPlayerTwoMoves([0, 0, 0, 0, 0, 0, 0, 0, 0]);
            data.setCurrentPlayer(1);
          }}
          className="px-4 py-1 text-sm font-bold text-green-400 rounded-md shadow-sm md:text-lg md:px-6 active:scale-95 bg-zinc-800 shadow-green-400"
        >
          RESET
        </button>
      </div>
      <div className="inline-grid grid-cols-3 gap-3 shadow-lg">
        <Cell index={0} gameTable={gameTable} />
        <Cell index={1} gameTable={gameTable} />
        <Cell index={2} gameTable={gameTable} />
        <Cell index={3} gameTable={gameTable} />
        <Cell index={4} gameTable={gameTable} />
        <Cell index={5} gameTable={gameTable} />
        <Cell index={6} gameTable={gameTable} />
        <Cell index={7} gameTable={gameTable} />
        <Cell index={8} gameTable={gameTable} />
      </div>
      <div className="flex justify-between p-6 font-semibold text-white ">
        <div className="flex flex-col items-center gap-2">
          <MdOutlineCircle
            className={cn("text-5xl md:text-7xl", {
              "animate-bounce": data.currentPlayer === 1,
            })}
          />
          Player 1
        </div>
        <div className="flex flex-col items-center gap-2">
          <RiCloseLargeFill
            className={cn("text-5xl md:text-7xl", {
              "animate-bounce": data.currentPlayer === 2,
            })}
          />
          Player 2
        </div>
      </div>
    </div>
  );
}
