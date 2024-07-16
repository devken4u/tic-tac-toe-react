import { IoMoonOutline } from "react-icons/io5";
import GameTable from "./GameTable";

export default function TicTacToe() {
  return (
    <div className=" bg-zinc-800 h-svh">
      <header className="flex items-center justify-between gap-4 px-10 py-10 sm:px-20">
        <h1 className="font-bold text-white font-montseratt min-w-[110px] sm:text-3xl">
          Tic Tac Toe{" "}
          <span className="whitespace-nowrap">
            by <span className="text-green-400">DevKen</span>
          </span>
        </h1>
        <div className="flex items-center gap-4">
          <button className="px-3 py-1 text-sm text-white transition-colors border border-green-400 rounded-md shadow-md shadow- bg-zinc-700 font-montseratt sm:p-2 sm:px-6 hover:text-green-400 hover:shadow-green-400 sm:text-xl">
            Reset
          </button>
          <button className="flex items-center justify-center text-xl text-green-400 border border-gray-500 rounded-full shadow-md bg-zinc-700 size-8 sm:size-10 sm:text-2xl hover:shadow-green-400">
            <IoMoonOutline />
          </button>
        </div>
      </header>
      {/* table */}
      <GameTable />
    </div>
  );
}
