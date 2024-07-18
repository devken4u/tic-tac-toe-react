import { useGameContext } from "../customHook/useGameContext";

export default function WinnerModal() {
  const data = useGameContext();

  return (
    <div className="absolute top-0 left-0 flex items-center flex-col justify-center w-full h-svh bg-black/40 z-[100] gap-4">
      <div className="text-3xl font-bold text-center text-white sm:text-4xl md:text-5xl lg:text-7xl">
        {data.winnerName} wins!
      </div>
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
            data.setWinnerName(null);
          }}
          className="px-4 py-1 text-sm font-bold text-green-400 rounded-md shadow-sm md:text-lg md:px-6 active:scale-95 bg-zinc-800 shadow-green-400"
        >
          RESET
        </button>
      </div>
    </div>
  );
}
