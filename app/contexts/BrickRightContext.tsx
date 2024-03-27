import { MutableRefObject, createContext } from "react";
export const BrickRightContext = createContext<{
  brickRefRight: MutableRefObject<HTMLDivElement | null>;
} | null>(null);
