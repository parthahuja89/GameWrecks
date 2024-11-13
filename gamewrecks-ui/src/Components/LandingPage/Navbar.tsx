import React from "react";
import { Button } from "../ui/button";
import { Gamepad2Icon, LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-10 container mx-auto">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Gamepad2Icon className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Game Wrecks
          </span>
        </div>
        <Button
          variant="outline"
          className="text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300"
        >
          Login
          <LogIn className="ml-2 h-5 w-5" />
        </Button>
      </nav>
    </header>
  );
}
