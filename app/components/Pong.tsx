"use client";
import { useEffect, useRef, useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { BallContext } from "../contexts/BallContext";
import { BrickLeftContext } from "../contexts/BrickLeftContext";
const Pong = () => {
  const ballRef = useRef<HTMLDivElement | null>(null);
  const layoutContext = useContext(GameContext);
  const ballContext = useContext(BallContext);
  const brickLeftContext = useContext(BrickLeftContext);
  useEffect(() => {
    let direction = 1; // 1: 오른쪽, -1: 왼쪽
    const moveBall = () => {
      if (ballRef.current) {
        const left = ballRef.current.style.left
          ? parseInt(ballRef.current.style.left)
          : 0;
        const ball = ballContext?.ballRef.current;
        const brick = brickLeftContext;

        if (brick) {
          const ballRect = ball.getBoundingClientRect();
          const brickRect = brick.getBoundingClientRect();
          {
            if (
              ballRect.x < brickRect.x + brickRect.width &&
              ballRect.x + ballRect.width > brickRect.x &&
              ballRect.y < brickRect.y + brickRect.height &&
              ballRect.y + ballRect.height > brickRect.y
            ) {
              // 충돌 발생
              console.log("Collision detected!");
              direction = -1;
            }
          }
        }

        if (left > 1120) direction = -1; // 오른쪽 끝에 도달하면 왼쪽으로
        if (left < 12) direction = 1; // 왼쪽 끝에 도달하면 오른쪽으로
        ballRef.current.style.top = "50%";
        ballRef.current.style.left = `${left + direction * 5}px`;
      }
    };

    const intervalId = setInterval(moveBall, 20);

    return () => clearInterval(intervalId);
  }, [layoutContext]);
  useEffect(() => {
    if (ballContext && ballRef.current) {
      ballContext.ballRef.current = ballRef.current;
    }
  }, [ballRef]);
  return (
    <div className="pong-ball-container">
      <div
        ref={ballRef}
        className="pong-ball w-8 h-8 absolute top-0 left-0 bg-white rounded-2xl"
      ></div>
    </div>
  );
};
export default Pong;
