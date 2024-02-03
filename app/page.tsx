"use client";
import GameLayout from "./components/GameLayout";
import Pong from "./components/Pong";
import { GameContext } from "./contexts/GameContext";
import { BallContext } from "./contexts/BallContext";
import { useRef } from "react";

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const ballRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="min-h-screen p-24 w-full h-full">
      <GameContext.Provider
        value={{
          backgroundRef,
        }}
      >
        <BallContext.Provider value={{ ballRef }}>
          <GameLayout />
          <Pong />
        </BallContext.Provider>
      </GameContext.Provider>
    </main>
  );
}
