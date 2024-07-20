import Cell from "./Cell";
import { RiCloseLargeFill } from "react-icons/ri";
import { MdOutlineCircle } from "react-icons/md";
import { useGameContext } from "../customHook/useGameContext";
import { cn } from "../utils/utils";

export default function GameTable() {
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
            data.setPlayerOne((prev) => ({
              ...prev,
              moves: [0, 0, 0, 0, 0, 0, 0, 0, 0],
              movesHistory: [],
            }));
            data.setPlayerTwo((prev) => ({
              ...prev,
              moves: [0, 0, 0, 0, 0, 0, 0, 0, 0],
              movesHistory: [],
            }));
            data.setCurrentPlayer(1);
          }}
          className="px-4 py-1 text-sm font-bold text-green-400 rounded-md shadow-sm md:text-lg md:px-6 active:scale-95 bg-zinc-800 shadow-green-400"
        >
          RESET
        </button>
      </div>
      <div className="inline-grid grid-cols-3 gap-3 shadow-lg">
        <Cell index={0} />
        <Cell index={1} />
        <Cell index={2} />
        <Cell index={3} />
        <Cell index={4} />
        <Cell index={5} />
        <Cell index={6} />
        <Cell index={7} />
        <Cell index={8} />
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
