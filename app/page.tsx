import Image from "next/image";
import GameLayout from "./components/GameLayout";

export default function Home() {
  return (
    <main className="min-h-screen p-24 w-full h-full">
      <GameLayout />
    </main>
  );
}
