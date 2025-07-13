// app/layout.tsx
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
    <html lang="en">
      <body className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-[#e0e0ff] min-h-screen">
        {children}
      </body>
    </html>
  );
}
