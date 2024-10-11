"use client";
import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import EmojiConfetti from "./ConfettiButton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { TypewriterEffect } from "./ui/typewriter-effect";
import ShineBorder from "./ui/shine-border";
import { Gift } from "lucide-react";

export function AnimatedModalDemo() {
  const words = [
    {
      text: "Querida",
      className: "font-bold",
    },
    {
      text: "[Nombre de tu novia],",
    },
    {
      text: "Hoy es un día",
    },
    {
      text: "especial",
      className: "text-pink-500 dark:text-pink-500",
    },
    {
      text: "porque celebramos tu",
    },
    {
      text: "vida",
      className: "text-yellow-500 dark:text-yellow-500",
    },
    {
      text: ",",
    },
    {
      text: "tu",
    },
    {
      text: "alegría",
      className: "text-red-500 dark:text-red-500",
    },
    {
      text: "y la luz que traes a mi mundo.",
    },
    {
      text: "Quiero aprovechar este momento para decirte lo",
    },
    {
      text: "importante",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "que eres para mí, lo afortunado que soy de tenerte a mi lado y lo mucho que te",
    },
    {
      text: "amo.",
      className: "text-red-500 dark:text-red-500 font-bold",
    },
    {
      text: " Espero que este año te traiga aún más felicidad y sueños cumplidos.",
    },
    {
      text: "Gracias por ser la persona tan",
    },
    {
      text: "maravillosa",
      className: "text-purple-500 dark:text-purple-500",
    },
    {
      text: "que eres.",
    },
    {
      text: " ¡Feliz cumpleaños!",
    },
    {
      text: "Con todo mi amor,",
    },
    {
      text: "[Tu nombre].",
      className: "font-bold",
    },
  ];

  return (
    <div className="flex items-center justify-center ">
      <Modal>
        <ModalTrigger className=" dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <EmojiConfetti />
        </ModalTrigger>
        <ModalBody className="">
          <ModalContent>
            <TypewriterEffect words={words} />
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="bg-black flex items-center justify-center gap-2 text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Siguiente <Gift />
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
