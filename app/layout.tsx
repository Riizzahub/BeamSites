
import './globals.css';

export const metadata = {
  title: 'Sites Page',
  description: 'Use this page to view all of our Roblox links',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-8">
        {children}
      </body>
    </html>
  );
}
