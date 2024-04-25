"use client"
import LandingPage from "@/components/landing-page";
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  const { userId } = useUser();
  // useEffect(() => {
  //   console.log("q",userId)
  //   if (userId) {
  //     router.push("/stream");
  //   }
  // }, [userId]);
  return (
    <main className="h-screen overflow-y-hidden overflow-x-hidden bg-black scrollStyle">
        <LandingPage/>
    </main>
  );
}
