"use client"
import { SideBar, TopMenu } from "@/components";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const{userCheckExist} = useAuthContext()
  useEffect(()=>{
    userCheckExist()
  },[])

  return (
    <main className="min-h-screen">
  
        <TopMenu />
        <SideBar />

        <div>
          {children}
        </div>
    </main>
  );
}
