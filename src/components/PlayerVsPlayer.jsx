import { motion } from "framer-motion";
import GameTable from "./GameTable";
import { useState, useEffect } from "react";
import { GameContext } from "../customHook/useGameContext";
import WinnerModal from "./WinnerModal";

export default function PlayerVsPlayer({ gameSettings, setIsMenuOpen }) {
  const winningMoves = [
    [1, 1, 1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, 1, 1, 1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, 1, 1, 1],
    [1, -1, -1, 1, -1, -1, 1, -1, -1],
    [-1, 1, -1, -1, 1, -1, -1, 1, -1],
    [-1, -1, 1, -1, -1, 1, -1, -1, 1],
    [1, -1, -1, -1, 1, -1, -1, -1, 1],
    [-1, -1, 1, -1, 1, -1, 1, -1, -1],
  ];
  const [winnerName, setWinnerName] = useState(null);
  const [gameTable, setGameTable] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerOneMoves, setPlayerOneMoves] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [playerTwoMoves, setPlayerTwoMoves] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  function isMovesMatch(moves) {
    let matches = 0;
    let isMatched = false;

    winningMoves.forEach((element) => {
      element.forEach((element, index) => {
        if (element === moves[index]) matches += 1;
      });
      if (matches === 3) {
        isMatched = true;
        return;
      }
      matches = 0;
    });
    return isMatched;
  }

  function checkWinner() {
    if (isMovesMatch(playerOneMoves)) {
      setWinnerName("Player 1");
    } else if (isMovesMatch(playerTwoMoves)) {
      setWinnerName("Player 2");
    }
  }

  useEffect(() => {
    checkWinner();
  }, [gameTable]);

  return (
    <div className="top-0 left-0 flex items-center justify-center w-full">
      <GameContext.Provider
        value={{
          setGameTable,
          gameTable,
          currentPlayer,
          setCurrentPlayer,
          setPlayerOneMoves,
          setPlayerTwoMoves,
          playerOneMoves,
          playerTwoMoves,
          gameSettings,
          winnerName,
          setWinnerName,
          setIsMenuOpen,
        }}
      >
        {winnerName && <WinnerModal />}
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.25,
            duration: 0.25,
          }}
        >
          <GameTable />
        </motion.div>
      </GameContext.Provider>
    </div>
  );
}
