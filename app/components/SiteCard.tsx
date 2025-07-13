
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface Site {
  title: string;
  url: string;
  status: string;
  flag: string;
  isMore?: boolean;
}

interface SiteCardProps {
  site: Site;
  index: number;
}

export default function SiteCard({ site, index }: SiteCardProps) {
  return (
    <motion.div 
      className={`
        p-5 md:p-6
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
        ${site.isMore 
          ? "bg-[rgba(25,30,60,0.8)] border-[rgba(92,107,192,0.6)]" 
          : "bg-[rgba(16,18,37,0.7)] border-[rgba(92,107,192,0.3)]"}
        backdrop-blur-md
        border
        rounded-2xl
        relative
        cursor-pointer
        mx-auto // Центрирование карточки
        w-full max-w-md // Ограничение ширины
      `}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 15px 35px rgba(40, 100, 255, 0.25)",
        borderColor: "rgba(92, 107, 192, 0.6)"
      }}
      onClick={() => alert(`You selected: ${site.title}`)}
    >
      {site.isMore && (
        <span className="absolute top-[-12px] right-4 bg-[#5d9bff] text-[#0a1120] text-xs font-bold px-3 py-1 rounded-full">
          MORE SITES
        </span>
      )}
      
      <h2 className="text-xl md:text-2xl font-semibold text-[#b1c8ff] flex items-center gap-2 mb-4">
        <span className="text-[#5d9bff] text-2xl">•</span>
        {site.title}
      </h2>
      
      <Link 
        href={site.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block mb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-lg hover:text-[#5d9bff] transition-colors underline">
          Dashboard
        </p>
      </Link>
      
      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[rgba(40,200,110,0.15)] border border-[#28c46b] text-[#28c46b]">
        Status: {site.status}
      </span>
      
      <div className="mt-4 pt-4 border-t border-[rgba(92,107,192,0.2)] font-medium flex items-center gap-2">
        Flag: {site.flag}
      </div>
    </motion.div>
  );
}
