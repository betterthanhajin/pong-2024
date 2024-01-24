import { MutableRefObject, createContext } from "react";

export const GameContext = createContext<{
  backgroundRef: MutableRefObject<HTMLDivElement | null>;
} | null>(null);
