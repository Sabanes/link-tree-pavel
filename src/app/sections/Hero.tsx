import React from 'react';
import Image from "next/image";
import { FlipWords } from "../components/flip";
import { AuroraBackground } from "../components/aurora";
import { motion } from "framer-motion";
import insta from "../../../public/icons/instagramm.png";
import telegram from "../../../public/icons/telegramm.png";
import twitter from "../../../public/icons/twitter.png";
import wapp from "../../../public/icons/watsapp.png";

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
        className="relative h-screen md:bottom-20 bottom-[4rem] md:pt-0 flex flex-col gap-5 items-center justify-center px-3"
      >
        <Image width={250} height={250} src="https://probuild.builders/wp-content/uploads/2024/07/logo.svg" alt="logo" className="pb-20 2xl:w-[500px] 2xl:h-[500px] 2xl:pt-0 md:w-[250px] md:h-[250px] w-[200px] h-[200px]" />
        <div className="2xl:text-8xl md:text-4xl text-3xl md:tracking-wider mx-auto font-normal text-white text-center">
          Build
          <FlipWords words={words} duration={2000} className="tracking-widest" /> <br />

          <span className="2xl:text-6xl md:text-4xl text-2xl md:leading-[3.5rem] relative top-1">
            Connect with Us & See Our Work
          </span> <br />
          <button className="relative top-10 inline-flex 2xl:h-[5.5rem] h-[3rem] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E1BAFF_0%,#EAC173_50%,#EAC173_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-900 opacity-95 px-8 py-1 2xl:text-4xl text-lg font-medium text-white backdrop-blur-3xl">
              Get in touch
            </span>
          </button>
        </div>
        <div className="flex justify-center items-center gap-x-7 relative top-11">
        <a href="https://www.instagram.com/probuildlisbon/"><Image src={insta} alt="Instagram" height={45} width={45} /></a>
        <a href="https://t.me/pavelprobuild"><Image src={telegram} alt="Telegram" height={45} width={45} /></a>
        <a href="https://api.whatsapp.com/send/?phone=351913480138&text&type=phone_number&app_absent=0"><Image src={wapp} alt="WhatsApp" height={45} width={45} /></a>
        </div>
      </motion.div>
      <iframe
  className="md:w-[60%] w-[90%] m-auto rounded-3xl mb-20 relative"
  src="https://www.chatbase.co/chatbot-iframe/Qh42_oA8GUc5myY32Cp56"
  width="100%"
  style={{ height: "100%", maxHeight: "700px" }}
  sandbox="allow-same-origin allow-scripts allow-popups"
></iframe>
    </AuroraBackground>
  );
}