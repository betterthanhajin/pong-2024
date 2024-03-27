"use client";
import GameLayout from "./components/GameLayout";
import Pong from "./components/Pong";
import { GameContext } from "./contexts/GameContext";
import { BallContext } from "./contexts/BallContext";
import { BrickLeftContext } from "./contexts/BrickLeftContext";
import { useRef } from "react";

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const ballRef = useRef<HTMLDivElement | null>(null);
  const brickRefLeft = useRef<HTMLDivElement | null>(null);

  return (
    <main className="min-h-screen w-full h-full">
      <GameContext.Provider
        value={{
          backgroundRef,
        }}
      >
        <BrickLeftContext.Provider value={{ brickRefLeft }}>
          <BallContext.Provider value={{ ballRef }}>
            <GameLayout />
            <Pong />
          </BallContext.Provider>
        </BrickLeftContext.Provider>
      </GameContext.Provider>
    </main>
  );
}
