import { RiCloseLargeFill } from "react-icons/ri";
import { MdOutlineCircle } from "react-icons/md";
import { cn } from "../utils/utils";
import { motion, useAnimationControls } from "framer-motion";
import { useGameContext } from "../customHook/useGameContext";

export default function Cell({ index }) {
  const controls = useAnimationControls();
  const data = useGameContext();

  function handleCellClick() {
    if (data.gameTable[index] === 0) {
      data.setGameTable(() => {
        const temp = [...data.gameTable];
        temp[index] = data.currentPlayer;
        return temp;
      });
      if (data.currentPlayer === 1) {
        data.setPlayerOneMoves(() => {
          const temp = [...data.playerOneMoves];
          temp[index] = 1;
          return temp;
        });
        data.setCurrentPlayer(2);
      } else {
        data.setPlayerTwoMoves(() => {
          const temp = [...data.playerTwoMoves];
          temp[index] = 1;
          return temp;
        });
        data.setCurrentPlayer(1);
      }
    } else {
      controls.start("wiggle");
    }
  }

  return (
    <motion.div
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
      {data.gameTable[index] !== 0 && (
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
      )}
    </motion.div>
  );
}
