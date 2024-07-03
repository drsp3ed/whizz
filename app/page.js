"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  if (
    localStorage.getItem("email") &&
    localStorage.getItem("password") &&
    localStorage.getItem("type") === "parent"
  )
    router.push("/p/dashboard/");
  if (
    localStorage.getItem("email") &&
    localStorage.getItem("password") &&
    localStorage.getItem("type") === "child"
  )
    router.push("/c/");
  else router.push("/signup/");
}
