"use client";
import {
  MouseEventHandler,
  useRef,
  createContext,
  useContext,
  useEffect,
} from "react";
import { GameContext } from "../contexts/GameContext";
import { BallContext } from "../contexts/BallContext";
import GameHeader from "./GameHeader";

const GameLayout = () => {
  const layoutContext = useContext(GameContext);
  const ballContext = useContext(BallContext);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const brickRefLeft = useRef<HTMLDivElement | null>(null);
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
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
          ballRect.x < brickRect.x + brickRect.width &&
          ballRect.x + ballRect.width > brickRect.x &&
          ballRect.y < brickRect.y + brickRect.height &&
          ballRect.y + ballRect.height > brickRect.y
        ) {
          // 충돌 발생
          console.log("Collision detected!");
        }

        if (
          ballRect.x < backgroundRect.x ||
          ballRect.x + ballRect.width >
            backgroundRect.x + backgroundRect.width ||
          ballRect.y < backgroundRect.y ||
          ballRect.y + ballRect.height >
            backgroundRect.y + backgroundRect.height
        ) {
          // ballRef가 backgroundRef를 벗어남
          // console.log("Game Over");
          // alert("Game Over");
          return;
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
      onMouseMove={handleMouseMove}
      ref={backgroundRef}
    >
      <GameHeader />
      <div className="game-layout__left">
        <div className="w-3 h-14 bg-white" ref={brickRefLeft}></div>
      </div>
      <div className="game-layout__center w-0 h-full border-l-4 border-dotted border-l-white"></div>
      <div className="game-layout__right">
        <div className="w-3 h-14 bg-white"></div>
      </div>
    </div>
  );
};
export default GameLayout;
