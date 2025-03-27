"use client";

import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "../globals.css";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  const { user, setUser } = useAppContext();

  useEffect(() => {
    const fetchUser = async () => {
      try {
          const response = await fetch("/api/user");
          const data = await response.json();

          setUser(data.user);
      } catch (error) {
          console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}
