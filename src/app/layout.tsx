import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {SocketProvider} from '@/context/SocketProvider'
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider"
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { usePathname } from "next/navigation";

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
      <ClerkProvider >
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
      </ClerkProvider>
    </html>
  );
}
