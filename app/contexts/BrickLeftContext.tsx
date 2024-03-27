import { MutableRefObject, createContext } from "react";
export const BrickLeftContext = createContext<{
  brickRefLeft: MutableRefObject<HTMLDivElement | null>;
} | null>(null);
