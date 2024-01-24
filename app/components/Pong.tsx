"use client";
import React, { useEffect, useRef } from "react";
import context from "./GameLayout";
const Pong = () => {
  const ballRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ball = ballRef.current;
    let direction = 1;
    const moveBall = () => {
      if (ball) {
        const left = ball.style.left ? parseInt(ball.style.left) : 0;
        if (left > window.innerWidth - 50) direction = -1;
        if (left < 0) direction = 1;
        ball.style.left = `${left + direction * 5}px`;
      }
    };
    const intervalId = setInterval(moveBall, 20);
    return () => clearInterval(intervalId);
  }, []);

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
