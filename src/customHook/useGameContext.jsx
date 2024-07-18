import { createContext, useContext } from "react";

export const GameContext = createContext(null);

export function useGameContext() {
  const data = useContext(GameContext);

  if (data === null) {
    throw new Error(
      "To use GameContext, the parent component is needed to be wrapped in GameContext.Provider"
    );
  }
  return data;
}
