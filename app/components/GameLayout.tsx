"use client";
import {
  MouseEventHandler,
  useRef,
  createContext,
  useContext,
  useEffect,
} from "react";
import { GameContext } from "../contexts/GameContext";

const GameLayout = () => {
  const layoutContext = useContext(GameContext);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const brickRefLeft = useRef<HTMLDivElement | null>(null);
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    console.log({ mousex: e.clientX, mousey: e.clientY });
    if (layoutContext && brickRefLeft.current) {
      if (brickRefLeft.current) {
        brickRefLeft.current.style.position = "absolute";
        if (parseInt(brickRefLeft.current.style.top) < 96) {
          brickRefLeft.current.style.top = "96px";
        }
        brickRefLeft.current.style.top = `${e.clientY - 56}px`;
      }
    }
  };

  useEffect(() => {
    if (layoutContext && backgroundRef.current) {
      layoutContext.backgroundRef.current = backgroundRef.current;
    }
  }, [backgroundRef]);
  return (
    <div
      className="game-layout flex justify-between items-center w-full h-full"
      onMouseMove={handleMouseMove}
      ref={backgroundRef}
    >
      <div className="game-layout__left">
        <div className="w-3 h-14 bg-slate-500" ref={brickRefLeft}></div>
      </div>
      <div className="game-layout__center w-0 h-full border-l-4 border-dotted border-l-slate-700"></div>
      <div className="game-layout__right">
        <div className="w-3 h-14 bg-slate-500"></div>
      </div>
    </div>
  );
};
export default GameLayout;
