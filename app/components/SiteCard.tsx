'use client';

import Link from 'next/link';

interface Site {
  title: string;
  url: string;
  status: string;
  flag: string;
}

interface SiteCardProps {
  site: Site;
  index: number;
}

export default function SiteCard({ site, index }: SiteCardProps) {
  return (
    <div 
      className={`
        p-6 w-full max-w-md
        transition-all duration-300
        bg-gray-900 border border-gray-700
        rounded-xl
        cursor-pointer
        hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20
        hover:-translate-y-1
      `}
      onClick={() => alert(`You selected: ${site.title}`)}
    >
      <h2 className="text-xl font-bold text-blue-400 flex items-center gap-2 mb-4">
        <span className="text-blue-500">•</span>
        {site.title}
      </h2>
      
      <Link 
        href={site.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block mb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors">
          Dashboard
        </p>
      </Link>
      
      <div className="flex flex-wrap items-center gap-4">
        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-900/40 text-green-400">
          Status: {site.status}
        </span>
        
        <span className="text-sm font-medium text-gray-400">
          Flag: {site.flag}
        </span>
      </div>
    </div>
  );
}
