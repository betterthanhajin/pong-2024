"use client";
import GameLayout from "./components/GameLayout";
import Pong from "./components/Pong";
import { GameContext } from "./contexts/GameContext";
import { useRef } from "react";

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="min-h-screen p-24 w-full h-full">
      <GameContext.Provider
        value={{
          backgroundRef,
        }}
      >
        <GameLayout />
        <Pong />
      </GameContext.Provider>
    </main>
  );
}
