import React from "react";
import { ChartColumn, BadgeCent, Gamepad } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";

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

export default function Features() {
  return (
    <>
      <h2 className="text-4xl font-bold text-white">Features</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {features.map((feature) => (
          <Card
            className="bg-neutral-900 text-white border-neutral-800 w-full"
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
    </>
  );
}
