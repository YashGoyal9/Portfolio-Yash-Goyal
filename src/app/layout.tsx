import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-black bg-white">
       <title>PortFolio | Yash Goyal</title>
        <link rel="icon" href="/assessts/yashLogo.png" />
      <body className={inter.className}>
        {children}
        <Toaster /> 
      </body>
    </html>
  );
}
