'use client';
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <TestimonialsSection />
      <Contact/>
      <Footer/>
    </div>
  );
}
