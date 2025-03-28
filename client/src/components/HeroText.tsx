
import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function HeroText() {
  const words = ["Depression", "Stress", "Anxiety", "Restlessness"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className=" mx-auto text-white dark:text-neutral-400 font-bold text-4xl sm:text-6xl">
        Treat
        <FlipWords words={words} /> <br />
        with MindSync
      </div>
    </div>
  )
}
