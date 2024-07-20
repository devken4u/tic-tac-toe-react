import { RiCloseLargeFill } from "react-icons/ri";
import { MdOutlineCircle } from "react-icons/md";
import { cn } from "../utils/utils";
import { motion, useAnimationControls } from "framer-motion";
import { useGameContext } from "../customHook/useGameContext";
import { useEffect, useRef } from "react";

export default function Cell({ index }) {
  const controls = useAnimationControls();
  const data = useGameContext();
  const icon = useRef(null);

  function handleCellClick() {
    if (data.gameTable[index] === 0) {
      data.setGameTable(() => {
        const temp = [...data.gameTable];
        temp[index] = data.currentPlayer;
        return temp;
      });
      if (data.currentPlayer === 1) {
        const moves = [...data.playerOne.moves];
        moves[index] = 1;
        const movesHistory = [...data.playerOne.movesHistory];
        movesHistory.push(index);
        data.setPlayerOne((prev) => ({
          ...prev,
          moves: moves,
          movesHistory: movesHistory,
        }));
        data.setCurrentPlayer(2);
      } else {
        const moves = [...data.playerTwo.moves];
        moves[index] = 1;
        const movesHistory = [...data.playerTwo.movesHistory];
        movesHistory.push(index);
        data.setPlayerTwo((prev) => ({
          ...prev,
          moves: moves,
          movesHistory: movesHistory,
        }));
        data.setCurrentPlayer(1);
      }
    } else {
      controls.start("wiggle");
    }
  }

  useEffect(() => {
    if (data.gameSettings.mode === "infinite") {
      if (
        data.playerOne.movesHistory.length >= 3 &&
        data.playerOne.movesHistory[0] === index
      ) {
        icon.current.style.opacity = 0.5;
      }

      if (
        data.playerTwo.movesHistory.length >= 3 &&
        data.playerTwo.movesHistory[0] === index
      ) {
        icon.current.style.opacity = 0.5;
      }

      if (data.gameTable[index] === 0) {
        icon.current.style.opacity = 1;
      }
    }
  });

  return (
    <motion.div
      ref={icon}
      variants={{
        wiggle: {
          x: [0, -5, 5, -5, 5, 0],
          transition: {
            duration: 0.2,
          },
        },
      }}
      onClick={handleCellClick}
      animate={controls}
      className={cn(
        "z-20 bg-white rounded-md size-[80px] sm:size-24 md:size-32 cell flex justify-center items-center text-[4rem] sm:text-[5rem] md:text-[7rem  cursor-pointer",
        {
          "text-green-400": data.gameTable[index] === 1,
          "text-red-400": data.gameTable[index] === 2,
        }
      )}
    >
      {data.gameTable[index] !== 0 ? (
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: ".5",
            type: "spring",
          }}
        >
          {data.gameTable[index] === 1 ? (
            <MdOutlineCircle />
          ) : (
            <RiCloseLargeFill />
          )}
        </motion.div>
      ) : (
        ""
      )}
    </motion.div>
  );
}
