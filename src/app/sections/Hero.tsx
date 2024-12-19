import React from "react";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData here
import { FlipWords } from "../components/flip";
import { AuroraBackground } from "../components/aurora";
import { motion, MotionProps } from "framer-motion";
import insta from "../../../public/icons/Facebook.svg";
import telegram from "../../../public/icons/Instagram.svg";
import wapp from "../../../public/icons/Twitter.svg";
import logo from "../../../public/icons/logo.png";

// Words for the FlipWords component
const words: string[] = ["Better", "Easy", "Beautiful", "Modern", ""];

// Reusable motion configuration
const motionConfig = (
  direction: "x" | "y",
  delay = 0,
  duration = 0.8
): MotionProps => ({
  initial: { opacity: 0, [direction]: 40 },
  whileInView: { opacity: 1, [direction]: 0 },
  transition: { delay, duration, ease: "easeInOut" },
});

// SocialLink component props
interface SocialLinkProps {
  href: string;
  src: StaticImageData; // Type for Next.js static imports
  alt: string;
  delay?: number;
}

// SocialLink Component
const SocialLink: React.FC<SocialLinkProps> = ({ href, src, alt, delay = 0 }) => (
  <motion.a {...motionConfig("y", delay)} href={href} target="_blank" rel="noopener noreferrer">
    <Image src={src} alt={alt} height={45} width={45} />
  </motion.a>
);

// Hero Component
const Hero: React.FC = () => {
  return (
    <AuroraBackground>
      <section className="relative md:bottom-10 bottom-7 md:pt-0 flex flex-col gap-5 items-center justify-center">
        {/* Logo */}
        <motion.div
          {...motionConfig("y")}
          className="backdrop-blur-xl p-3 rounded-3xl"
        >
          <Image
            width={500}
            height={500}
            src={logo}
            alt="logo"
            className="2xl:pt-0 md:w-[520px] md:h-[150px] w-[270px] h-[80px]"
          />
        </motion.div>

        {/* Animated Text */}
        <motion.div
          {...motionConfig("x", 0.3)}
          className="pt-10 2xl:text-8xl md:text-4xl text-3xl md:tracking-wider mx-auto font-normal text-white text-center"
        >
          Dance
          <FlipWords words={words} duration={2000} className="tracking-widest pb-5" />
          <br />
          <a target="_blank" href="https://edevadance.netlify.app" rel="noopener noreferrer">
            <motion.button
              {...motionConfig("x", 0.5)}
              className="relative inline-flex 2xl:h-[5.5rem] h-[3rem] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E1BAFF_0%,#EAC173_50%,#EAC173_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-900 opacity-95 px-8 py-1 2xl:text-4xl text-lg font-medium text-white backdrop-blur-3xl">
                Visit Website
              </span>
            </motion.button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex justify-center items-center gap-x-7">
          <SocialLink
            href="#"
            src={insta}
            alt="Facebook"
            delay={1}
          />
          <SocialLink
            href="#"
            src={telegram}
            alt="Instagram"
            delay={1.2}
          />
          <SocialLink
            href="#"
            src={wapp}
            alt="Twitter"
            delay={1.3}
          />
        </motion.div>
      </section>
    </AuroraBackground>
  );
};

export default Hero;