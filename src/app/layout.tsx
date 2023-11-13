import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSCI-1000 GitHub Project",
  description: "Group project for CSCI-1000 to learn about Git and GitHub.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto min-h-screen px-4 2xl:px-2`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
