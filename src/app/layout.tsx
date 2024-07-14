import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {SocketProvider} from '@/context/SocketProvider'
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider"

const inter = Inter({ subsets: ["latin"], variable:"--font-sans" });

export const metadata: Metadata = {
  title: "Geochat Webapp",
  description: "Webapp to connect chat webapp on location",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
        <SocketProvider>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <body className={inter.className +"antialiased"}>
                <Navbar />
                {children}
              </body>
          </ThemeProvider>
        </SocketProvider>
    </html>
  );
}
