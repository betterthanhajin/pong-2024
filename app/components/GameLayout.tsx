"use client";
import {
  MouseEventHandler,
  useRef,
  useState,
  createContext,
  useContext,
  useEffect,
  KeyboardEventHandler,
} from "react";
import { GameContext } from "../contexts/GameContext";
import { BallContext } from "../contexts/BallContext";
import GameHeader from "./GameHeader";
import GameDesc from "./GameDesc";

const GameLayout = () => {
  const layoutContext = useContext(GameContext);
  const ballContext = useContext(BallContext);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const brickRefLeft = useRef<HTMLDivElement | null>(null);
  const [brickPosition, setBrickPosition] = useState({
    top: 0,
  });
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      handleKeyDown(event);
    });
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (brickRefLeft.current) {
      brickRefLeft.current.style.position = "absolute";
      let top = brickRefLeft.current.style.top
        ? parseInt(brickRefLeft.current.style.top)
        : 400;
      if (event.key === "w") {
        if (top === 80) {
          return;
        }
        brickRefLeft.current.style.top = `${top - 10}px`;
      }

      if (event.key === "s") {
        brickRefLeft.current.style.top = `${top + 10}px`;
      }
    }
  };

  useEffect(() => {
    if (layoutContext && backgroundRef.current) {
      layoutContext.backgroundRef.current = backgroundRef.current;
    }
  }, [backgroundRef]);

  useEffect(() => {
    const checkCollision = () => {
      const ball = ballContext?.ballRef.current;
      const brick = brickRefLeft.current;
      const background = backgroundRef.current;

      if (ball && brick && background) {
        const ballRect = ball.getBoundingClientRect();
        const brickRect = brick.getBoundingClientRect();
        const backgroundRect = background.getBoundingClientRect();

        if (
          backgroundRect.width >= ballRect.x ||
          backgroundRect.left <= ballRect.x
        ) {
        } else {
        }
      }
    };

    // 60fps로 충돌 확인
    const intervalId = setInterval(checkCollision, 1000 / 60);

    return () => {
      clearInterval(intervalId);
    };
  }, [ballContext?.ballRef.current, brickRefLeft]);
  return (
    <div
      className="game-layout flex justify-between items-center w-full h-full relative"
      ref={backgroundRef}
    >
      <GameHeader />
      <div className="game-layout__left">
        <div
          className="w-3 h-16 bg-white ml-3"
          ref={brickRefLeft}
          onKeyDown={handleKeyDown}
        ></div>
      </div>
      <div className="game-layout__center w-0 h-full border-l-4 border-dotted border-l-white relative z-10"></div>
      <GameDesc />
      <div className="game-layout__right">
        <div className="w-3 h-16 bg-white mr-3"></div>
      </div>
    </div>
  );
};
export default GameLayout;
