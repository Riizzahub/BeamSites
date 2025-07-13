'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
    <motion.div 
      className={`
        p-6
        transition-all duration-300
        bg-black border border-gray-700
        rounded-xl
        relative
        cursor-pointer
        overflow-hidden
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5,
        backgroundColor: "rgba(30, 30, 40, 0.8)",
        borderColor: "#5d9bff",
        boxShadow: "0 10px 25px rgba(93, 155, 255, 0.2)"
      }}
      onClick={() => alert(`You selected: ${site.title}`)}
    >
      <div className="relative z-10">
        <h2 className="text-xl font-bold text-[#b1c8ff] flex items-center gap-2 mb-4">
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
          <p className="text-lg font-medium hover:text-[#5d9bff] transition-colors">
            Dashboard
          </p>
        </Link>
        
        <div className="flex items-center gap-4 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-900/30 border border-green-500 text-green-400">
            Status: {site.status}
          </span>
          
          <span className="text-sm font-medium">
            Flag: {site.flag}
          </span>
        </div>
      </div>
      
      {/* Анимированный фон при наведении */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/10 to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
