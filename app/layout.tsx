import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // 🔥 important
});

export const metadata: Metadata = {
  title: "MyStackTools",
  description: "Find the best tools for your needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} min-h-full antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}