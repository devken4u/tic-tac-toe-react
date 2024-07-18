import { motion, AnimatePresence } from "framer-motion";
import { sfx, playSfx } from "../customHook/useSfx";

export default function Menu({ gameSettings, setGameSettings, setIsMenuOpen }) {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full pointer-events-none -z-0 h-svh">
      <motion.div
        className="relative px-8 py-4 pointer-events-auto bg-white/20 backdrop-blur-sm rounded-2xl"
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 0.25,
        }}
        exit={{
          scale: 0,
        }}
      >
        <h1 className="mb-6 text-xl font-bold text-center text-white cursor-default md:text-3xl font-montseratt">
          Menu
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <label
              htmlFor="mode"
              className="mr-2 font-semibold text-white cursor-pointer md:text-xl hover:text-green-400"
            >
              Mode
            </label>
            <select
              id="mode"
              className="p-1 font-semibold rounded-md cursor-pointer md:text-xl"
              value={gameSettings.mode}
              onChange={(e) =>
                setGameSettings((prev) => ({ ...prev, mode: e.target.value }))
              }
            >
              <option value="classic">Classic</option>
              <option value="infinite">Infinite</option>
            </select>
          </div>

          <div className="flex items-center">
            <label
              htmlFor="versus"
              className="mr-2 font-semibold text-white cursor-pointer hover:text-green-400 md:text-xl"
            >
              Versus
            </label>
            <select
              id="versus"
              className="p-1 font-semibold rounded-md cursor-pointer md:text-xl"
              value={gameSettings.versus}
              onChange={(e) =>
                setGameSettings((prev) => ({ ...prev, versus: e.target.value }))
              }
            >
              <option value="pvp">Player vs Player</option>
              <option value="pvc">Player vs Computer</option>
            </select>
          </div>
        </div>
        <div>
          <div className="flex justify-center pt-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                playSfx(sfx.select);
                setIsMenuOpen(false);
              }}
              className="px-6 py-1 font-bold text-white bg-green-500 shadow-md md:text- shadow-green-300 rounded-2xl"
            >
              START
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
