import React from "react";

export default function Footer() {
  return (
    <footer className="flex mt-20 flex-row items-center justify-between gap-10 w-full px-4">
      <p className="text-center text-slate-400">
        Made by{" "}
        <a
          href="https://parthahuja.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300"
        >
          Parth
        </a>
        {"; "}
        WTFPL 2024.
      </p>

      <p className="text-center text-slate-400">
        <a
          href="https://github.com/parthahuja89/GameWrecks/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300"
        >
          GitHub
        </a>
        {" | "}
        <a
          href="https://discord.gg/9w3u8k4u"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300"
        >
          Discord
        </a>
      </p>
    </footer>
  );
}
