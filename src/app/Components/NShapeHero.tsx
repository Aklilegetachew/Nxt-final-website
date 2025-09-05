"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function NShapeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Autoplay failed", err);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🎥 Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/entsora2.mp4" type="video/mp4" />
      </video>

      {/* 🔲 Overlay (except N-shape cutout) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="n-mask">
            <rect width="1000" height="600" fill="white" />
            <path
              d="
          M600,150 
          L600,500 
          L700,450 
          L700,300 
          L800,450 
          L900,450 
          L900,150 
          L800,100 
          L800,300 
          L700,150 
          Z
        "
              fill="black"
            />
          </mask>
        </defs>
        <rect
          width="1000"
          height="600"
          fill="black"
          fillOpacity="0.85"
          mask="url(#n-mask)"
        />
      </svg>

      {/* 🌟 Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full text-white">
        {/* Right Side Text */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center px-8">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Smart Software for Smarter Businesses
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Custom ERP and business solutions tailored to your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#services"
                className="px-6 py-3  rounded-full transition"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
