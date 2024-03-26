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
  const brickRefRight = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      // 60fps로 충돌 확인
      const keyDownIntervalId = setInterval(handleKeyDown, 1000 / 60, event);

      return () => {
        clearInterval(keyDownIntervalId);
      };
    });
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (brickRefLeft.current) {
      brickRefLeft.current.style.position = "absolute";
      let top = brickRefLeft.current.style.top
        ? parseInt(brickRefLeft.current.style.top)
        : 410;

      if (event.key === "w") {
        if (top <= 80) {
          return;
        }
        brickRefLeft.current.style.top = `${top - 50}px`;
        brickRefLeft.current.style.transition = "all 0.1s";
      }

      if (event.key === "s") {
        if (top >= 720) {
          return;
        }
        brickRefLeft.current.style.top = `${top + 50}px`;
        brickRefLeft.current.style.transition = "all 0.1s";
        console.log(
          "brickRefLeft.current.style.top",
          brickRefLeft.current.style.top
        );
      }
    }

    if (brickRefRight.current) {
      let rightTop = brickRefRight.current.style.top
        ? parseInt(brickRefRight.current.style.top)
        : 410;
      console.log("evemnt.key", event.key);
      if (event.key === "o") {
        if (rightTop <= 80) {
          return;
        } else {
          brickRefRight.current.style.position = "absolute";
          brickRefRight.current.style.top = `${rightTop - 50}px`;
          brickRefRight.current.style.marginLeft = "-20px";
          brickRefRight.current.style.transition = "all 0.2s";
        }
      }

      if (event.key === "l") {
        if (rightTop >= 720) {
          return;
        } else {
          brickRefRight.current.style.position = "absolute";
          brickRefRight.current.style.top = `${rightTop + 50}px`;
          brickRefRight.current.style.marginLeft = "-20px";
          brickRefRight.current.style.transition = "all 0.2s";
          console.log(
            "brickRefRight.current.style.top",
            brickRefRight.current.style.top
          );
        }
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
      const brickRight = brickRefRight.current;
      const background = backgroundRef.current;

      if (ball && brick && background && brickRight) {
        const ballRect = ball.getBoundingClientRect();
        const brickRect = brick.getBoundingClientRect();
        const brickRightRect = brickRight?.getBoundingClientRect();
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
          ballRect.x + ballRect.width > brickRightRect.x &&
          ballRect.y < brickRightRect.y + brickRightRect.height
        ) {
          if (ballRect.x + ballRect.width === brickRightRect.x) {
            return;
          }
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
        <div className="w-3 h-16 bg-white ml-3" ref={brickRefLeft}></div>
      </div>
      <div className="game-layout__center w-0 h-full border-l-4 border-dotted border-l-white relative z-10"></div>
      <GameDesc />
      <div className="game-layout__right">
        <div className="w-3 h-16 bg-white mr-3" ref={brickRefRight}></div>
      </div>
    </div>
  );
};
export default GameLayout;
