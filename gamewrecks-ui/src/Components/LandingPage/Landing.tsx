import React from "react";
import { Button } from "../ui/button";
import { Swords, Info, ChartColumn, BadgeCent, Gamepad } from "lucide-react";
import NavBar from "./Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Recommendations",
    icon: ChartColumn,
    description: (
      <>
        Find the best games to play based on your Steam library. No more wasting
        time searching for the best games.
        <span className="block mt-5">
          Game Wrecks uses AI to recommend games based on your Steam library
        </span>
      </>
    ),
  },
  {
    title: "Free to use",
    icon: BadgeCent,
    description:
      "I made this project for fun and to learn more about AI. It's completely free to use and open source. All data is stored encrypted on the server. Furthermore, you can delete your data and account anytime.",
  },
  {
    title: "Steam Integration",
    icon: Gamepad,
    description:
      "You can easily add your Steam library using the Steam API. You can also add your games manually in the dashboard.",
  },
];

export default function Landing() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] px-4 py-8">
      <NavBar />

      <div className="container mx-auto mt-20">
        <h1 className="text-7xl font-bold text-white">
          Level Up Your{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            {" "}
            Gaming{" "}
          </span>{" "}
          Experience
        </h1>
        <h2 className="text-2xl font-light text-slate-400 mt-5">
          Game Wrecks uses AI to recommend games based on your Steam library.
          It's also completely free to use and open source. You can check out
          the code on{" "}
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
        <div className="flex gap-4 mt-10">
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

      <section className="container mx-auto mt-20 flex flex-col items-center justify-center gap-10">
        <h2 className="text-4xl font-bold text-white">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <Card
              className="bg-neutral-900 text-white border-neutral-800"
              key={feature.title}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <feature.icon className="h-6 w-6 text-slate-300" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-200">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
}
