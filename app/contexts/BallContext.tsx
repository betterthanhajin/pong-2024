import { MutableRefObject, createContext } from "react";
export const BallContext = createContext<{
  ballRef: MutableRefObject<HTMLDivElement | null>;
} | null>(null);
