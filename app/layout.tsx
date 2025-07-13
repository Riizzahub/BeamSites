import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Immortal Sites',
  description: 'View all of our Roblox links',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black text-[#e0e0ff] min-h-screen">
        {children}
      </body>
    </html>
  );
}
