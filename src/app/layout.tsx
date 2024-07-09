import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";
import AuthContextProvider, { useAuthContext } from "@/context/AuthContext.jsx";
import CartContextProvider from './../context/CartContext';
export const metadata: Metadata = {
  title: "Teslo Shop",
  description: "Teslo shop by Valentino Copperi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
 
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <CartContextProvider>
            {children}
          </CartContextProvider>
        </AuthContextProvider>
        </body>
    </html>
  );
}
