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
  const [playerOne, setPlayerOne] = useState({
    moves: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    movesHistory: [],
  });
  const [playerTwo, setPlayerTwo] = useState({
    moves: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    movesHistory: [],
  });

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

  useEffect(() => {
    if (gameSettings.mode === "infinite") {
      if (playerOne.movesHistory.length >= 4) {
        let tempGameTable = [...gameTable];
        tempGameTable[playerOne.movesHistory[0]] = 0;
        setGameTable(() => tempGameTable);

        const moves = [...playerOne.moves];
        moves[playerOne.movesHistory[0]] = 0;

        let movesHistory = [...playerOne.movesHistory];
        movesHistory.shift();

        setPlayerOne((prev) => ({
          ...prev,
          moves: moves,
          movesHistory: movesHistory,
        }));

        if (isMovesMatch(moves)) {
          setWinnerName("Player 1");
        }
      } else if (playerOne.movesHistory.length === 3) {
        if (isMovesMatch(playerOne.moves)) {
          setWinnerName("Player 1");
        }
      }

      if (playerTwo.movesHistory.length >= 4) {
        let tempGameTable = [...gameTable];
        tempGameTable[playerTwo.movesHistory[0]] = 0;
        setGameTable(() => tempGameTable);

        const moves = [...playerTwo.moves];
        moves[playerTwo.movesHistory[0]] = 0;

        let movesHistory = [...playerTwo.movesHistory];
        movesHistory.shift();

        setPlayerTwo((prev) => ({
          ...prev,
          moves: moves,
          movesHistory: movesHistory,
        }));

        if (isMovesMatch(moves)) {
          setWinnerName("Player 2");
        }
      } else if (playerOne.movesHistory.length === 3) {
        if (isMovesMatch(playerTwo.moves)) {
          setWinnerName("Player 1");
        }
      }
    } else {
      if (isMovesMatch(playerOne.moves)) {
        setWinnerName("Player 1");
      } else if (isMovesMatch(playerTwo.moves)) {
        setWinnerName("Player 2");
      }
    }
  }, [gameTable]);

  return (
    <div className="top-0 left-0 flex items-center justify-center w-full">
      <GameContext.Provider
        value={{
          setGameTable,
          gameTable,
          currentPlayer,
          setCurrentPlayer,
          gameSettings,
          winnerName,
          setWinnerName,
          setIsMenuOpen,
          playerOne,
          setPlayerOne,
          playerTwo,
          setPlayerTwo,
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
