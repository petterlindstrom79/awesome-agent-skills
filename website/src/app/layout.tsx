import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WikiSidebar from "@/components/WikiSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent Skills",
  description: "A simple, open format for giving agents new capabilities and expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black min-h-screen flex flex-col bg-background`}
      >
        <Navbar />
        <div className="flex flex-1 pt-16">
          <WikiSidebar />
          <main className="flex-1 min-w-0 md:pl-72 flex justify-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
