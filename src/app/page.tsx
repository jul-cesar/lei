"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatedModalDemo } from "@/components/Carta";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const words =
    "FELIIIII CUMPLEEE LEIDYYYyyYY  FELIIIII CUMPLEEE LEIDYYYyyYYFELIIIII CUMPLEEE LEIDYYYyyYY";
  

  return (
    <div className="h-screen w-full bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-[#fb3b5e] to-[#32032c] flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.9}
          maxSize={2.2}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="flex flex-col items-center justify-center  lg:m-20 gap-4 lg:w-[550px] ">
        <TextGenerateEffect words={words} />
        <AnimatedModalDemo />
      </div>
    </div>
  );
}
