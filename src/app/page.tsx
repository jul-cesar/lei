"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatedModalDemo } from "@/components/Carta";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HeartIcon } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const words = "feli cumpleEeE LEIDYYYY";

  return (
    <div className="h-screen w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <Vortex
        rangeY={800}
        particleCount={500}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div className="flex flex-col items-center justify-center lg:m-20 gap-4 lg:w-[550px] z-10">
         
            <TextGenerateEffect words={words} />
 

          <AnimatedModalDemo />
          <div className="relative  w-full px-4 max-w-2xl left-0 z-20">
            <div className="flex items-center">
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight p-2 text-white">
                i wanna kiss kiss you.
              </h4>
              <HeartIcon className="text-white" />
            </div>

            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/4PwWESSlTwzvw9B7bmtTLS?utm_source=generator"
              width="100%"
              height="100"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>

        {/* Container for the iframe with responsiveness */}
      </Vortex>
    </div>
  );
}
