"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

export default function LayoutGridDemo() {
  const words = ["bb", "leidy", "chica", "silly", "lulu", "xayah", "idiota"];

  return (
    <div className="h-screen   w-full bg-black ">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="md:text-2xl text-lg font-normal text-white pl-1">
        Recuerdos o cosas q me recuerdan a mi
        <FlipWords words={words} duration={100} /> <br />
      </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        te amare siempre
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        por siempre!!!
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">usss</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        eres la negr ok
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Us bn racistas jjjj
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        *falla todas las r y q de pyke*
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        tu las mas cute y yo
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        casi no me veo pero ahi toy ok jjjjjj
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">us tambien ok</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        pero solo me vuelves loco tu no como sanji ok
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        foto de nojotros
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        amo jugar xayah y rakan contigo
      </p>
    </div>
  );
};

const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">siiiii</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        como eres tan silly??
      </p>
    </div>
  );
};

const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        dibujo de us q hiciste
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        amo tus dibujos okkkkkk
      </p>
    </div>
  );
};

const SkeletonNine = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">leidy</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        simplemente tu, tu sticker
      </p>
    </div>
  );
};

const SkeletonTen = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">zeuuu</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        nuestro hijo ok. Es su mejor foto btw
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:row-span-3",
    thumbnail:
      "https://github.com/jul-cesar/lei/blob/main/compressed/08c7f7ea-cbfd-46ea-98d7-204c5f7ca40f.jpg?raw=true",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "md:row-span-3",
    thumbnail:
      "https://github.com/jul-cesar/lei/blob/main/compressed/5cab0cff-eca1-4ba8-8b63-54e430de6756.jpg?raw=true",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "md:row-span-3",
    thumbnail:
      "https://github.com/jul-cesar/lei/blob/main/compressed/f9775de1-07f3-42db-922e-a5ca2ee5f233%20(1).jpg?raw=true",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:row-span-3",
    thumbnail:
      "https://github.com/jul-cesar/lei/blob/main/compressed/8ffe2e45-e3f3-4309-b900-b072073856a9.jpg?raw=true",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:row-span-3",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgUGmNXu8YbErkedRnaGxt1bkEuoYAY9W8w&s",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:row-span-3",
    thumbnail:
      "https://github.com/jul-cesar/lei/blob/main/compressed/53aa076e-f4bb-4aa3-9ba6-8989d9f9de55.jpg?raw=true",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:row-span-3",
    thumbnail:
      "https://github.com/jul-cesar/lei/blob/main/compressed/65f404c6-936f-4e39-951e-9420d3ad255b.jpg?raw=true",
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "md:row-span-3",
    thumbnail:
      "https://github.com/jul-cesar/lei/blob/main/compressed/84aefc91-8c5f-4e53-83d7-866a3c628fc9.jpg?raw=true",
  },
  {
    id: 9,
    content: <SkeletonNine />,
    className: "md:row-span-3",
    thumbnail:
      "https://github.com/jul-cesar/lei/blob/main/compressed/03759cfe-aca8-4575-87fe-a98ceb74820e.jpg?raw=true",
  },
  {
    id: 10,
    content: <SkeletonTen />,
    className: "md:row-span-3",
    thumbnail:
      "https://github.com/jul-cesar/lei/blob/main/compressed/229fe6b7-a333-4ea1-8296-5b405368d422.jpg?raw=true",
  },
];
