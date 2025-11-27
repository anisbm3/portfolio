"use client";

import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import GalleryLaunch from "@/components/GalleryLaunch";
import Skills from "@/components/Skills";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamic import for Gallery3D to avoid SSR issues with Three.js
const Gallery3D = dynamic(() => import("@/components/Gallery3D"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-40 bg-black flex items-center justify-center">
      <p className="text-white text-xl">Loading Gallery...</p>
    </div>
  ),
});

export default function Home() {
  const [showLaunch, setShowLaunch] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const handleLaunchComplete = () => {
    setShowLaunch(false);
    setShowGallery(true);
  };

  const handleExitGallery = () => {
    setShowGallery(false);
  };

  return (
    <div>
      {/* Hero or intro section if needed */}
      
      <About />

      <Skills />

      {/* Certifications */}
      <Certifications />

      {/* Experience */}
      <Experience />
      <section id="project" className="min-h-[60vh] flex flex-col items-center justify-center relative py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white text-center md:text-left order-2 md:order-1">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Welcome to My Gallery of Projects</h2>
            <p className="text-lg leading-relaxed mb-6">
              Explore a curated collection of my work and creations. I hope you enjoy your visit and find inspiration in these projects.
            </p>
            <Button size="lg" className="rounded-full px-8 py-4 text-lg" onClick={() => setShowLaunch(true)}>
              Welcome to our gallery <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
          <div className="h-96 md:h-full order-1 md:order-2">
            <img src="/3.jpg" alt="Gallery Image" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>
      <GalleryLaunch visible={showLaunch} onAnimationComplete={handleLaunchComplete} />
      {showGallery && <Gallery3D onExit={handleExitGallery} />}
      
      {/* Social Section */}
      <Social />
      
      {/* Contact Section */}
      <Contact />
    </div>
  );
}