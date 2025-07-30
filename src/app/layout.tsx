import HeaderComponent from "@/components/Header";
import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Fametonic",
  description: "Welcome to Fametonic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${figtree.variable} antialiased bg-[#010101]`}
      >
        <HeaderComponent />
        <div className="px-[10px]  md:px-[211px]">{children}</div>
      </body>
    </html>
  );
}
