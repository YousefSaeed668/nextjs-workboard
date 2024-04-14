import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
// %s work as a placeholder for the title not work on the main page it works in child pages
export const metadata: Metadata = {
  title: {
    default: "Workboard",
    template: "%s | Workboard",
  },
  description: "Find Your Dream Developer Job .",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[350px+]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
