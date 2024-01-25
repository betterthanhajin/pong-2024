"use client";
import { useEffect, useRef, useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { BallContext } from "../contexts/BallContext";
const Pong = () => {
  const ballRef = useRef<HTMLDivElement | null>(null);
  const layoutContext = useContext(GameContext);
  const ballContext = useContext(BallContext);
  useEffect(() => {
    console.log("use", { ballContext });
    const ball = ballRef.current;
    let direction = 1;
    const moveBall = () => {
      if (ball && layoutContext && layoutContext.backgroundRef.current) {
        const left = ball.style.left ? parseInt(ball.style.left) : 112;
        if (left > layoutContext.backgroundRef.current?.offsetWidth + 45)
          direction = 1;
        if (left < 112) direction = 1;
        ball.style.left = `${left + direction * 5}px`;
        ball.style.top = window.innerHeight / 2 + "px";
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
        className="pong-ball w-8 h-8 absolute top-0 left-0 bg-teal-500 rounded-2xl"
      ></div>
    </div>
  );
};
export default Pong;
