import React from 'react';
import Image from "next/image";
import { FlipWords } from "../components/flip";
import { AuroraBackground } from "../components/aurora";
import { motion } from "framer-motion";

const words = ["Better", "Faster", "Beautiful", "Modern", ""];

export default function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative md:pt-0 pt-20 bottom-[7rem] flex flex-col gap-5 items-center justify-start px-4"
      >
        <Image width={250} height={250} src="https://probuild.builders/wp-content/uploads/2024/07/logo.svg" alt="logo" className="pb-20 2xl:w-[500px] 2xl:h-[500px] 2xl:pt-0 md:w-[250px] md:h-[250px] w-[200px] h-[200px]" />
        <div className="pt-10 md:text-4xl text-3xl md:tracking-wider mx-auto font-normal text-white text-center">
          Build
          <FlipWords words={words} duration={2000} className="tracking-widest" /> <br />

          <span className="md:text-4xl text-2xl md:leading-[3rem] relative top-1">
            Connect with Us & See Our Work.
          </span> <br />
          <button className="relative top-10 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E1BAFF_0%,#393BB2_50%,#E4CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-900 opacity-95 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
              Get in touch
            </span>
          </button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
