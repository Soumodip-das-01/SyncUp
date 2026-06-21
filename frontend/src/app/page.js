import Image from "next/image";
import Logo from "@/components/shared/Logo";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className=" bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Stats/>
      <CTA/>
      <Footer/>
    </div>

  );
}
