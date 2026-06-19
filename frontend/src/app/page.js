import Image from "next/image";
import Logo from "@/components/shared/Logo";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <div className=" bg-black">
      <Navbar />
      <Hero />
      <Features />
    </div>

  );
}
