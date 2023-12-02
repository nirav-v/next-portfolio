import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nirav",
  description: "Full Stack Developer Nirav Venkatesan",
};

import Nav from "@/components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-5 w-full flex-1 text-center">
          <div className="hidden sm:block z-100"></div>
          {/* <div className="-m-5 block sm:hidden z-100">
        <MobileNavbar />
      </div> */}
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
