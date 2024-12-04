import React from "react";
import { Button } from "../ui/button";
import { Swords, Info } from "lucide-react";

export default function Hero() {
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-5xl md:text-7xl font-bold text-white">
        Level Up Your{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          {" "}
          Gaming{" "}
        </span>{" "}
        Experience
      </h1>
      <h2 className="text-xl md:text-2xl font-light text-slate-400 mt-5">
        Game Wrecks uses your game library to recommend you new games to play. It's
        also completely free to use and open source. You can check out the code
        on{" "}
        <a
          href="https://github.com/partha-huja/GameWrecks"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300"
        >
          GitHub
        </a>
        .
      </h2>
      <div className="flex gap-4 mt-5">
        <Button className="mt-10 bg-slate-200 hover:bg-slate-300 text-slate-700 hover:text-slate-900 transition-all duration-300">
          Learn More
          <Info className="h-5 w-5" />
        </Button>
        <Button className="mt-10 bg-purple-500 hover:bg-purple-600 text-white hover:text-white transition-all duration-300">
          Get Started
          <Swords className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
