import { Inter } from "next/font/google";
import Navbar from "./components/navbar.js";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Names from './components/Names.js';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wedding Website",
  description: "created by Sarah Nodwell with Next.js",
};



export default function RootLayout({ children}) {

  return (
    <html lang="en">

      <ClerkProvider>
      <body className={inter.className}>
        <Navbar />
        <div className="pt-10 pb-10"></div>
        {children}
      </body>
    </ClerkProvider>
    </html>
  );
}
