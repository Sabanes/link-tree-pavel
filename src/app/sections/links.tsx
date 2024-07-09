"use client";
import React from "react";
import { BackgroundGradient } from "../components/cool-bg";
import Image from "next/image";

interface CardData {
  src: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
}

const cardData: CardData[] = [
  {
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/zsoep5klov4ewaytfqrc",
    alt: "jordans",
    title: "Our Website",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    buttonText: "Visit Website"
  },
  {
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/uvgeno30gtgdkt3ygca6",
    alt: "jordans",
    title: "WhatsApp",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    buttonText: "Get in touch"
  },
  {
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/zn7yibxl8wiivoae0g4a",
    alt: "jordans",
    title: "Telegram",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    buttonText: "Visit Website"
  },
  {
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/zsoep5klov4ewaytfqrc",
    alt: "jordans",
    title: "Our Website",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    buttonText: "Visit Website"
  },
  {
    src: "https://res.cloudinary.com/dcraqvlmb/image/upload/f_auto,q_auto/zsoep5klov4ewaytfqrc",
    alt: "jordans",
    title: "Our Website",
    description:
      "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    buttonText: "Visit Website"
  }
];

const Card: React.FC<CardData> = ({ src, alt, title, description, buttonText }) => (
  <div className="max-w-fit">
    <BackgroundGradient className="rounded-[22px] max-w-sm px-6 py-7 sm:p-10 bg-zinc-900">
      <Image
        src={src}
        alt={alt}
        height={400}
        width={400}
        className="object-contain rounded-md"
      />
      <p className="md:text-2xl text-xl mt-4 mb-2 text-neutral-200">{title}</p>
      <p className="md:text-md text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
      <button className="rounded-full pl-4 pr-4 py-2 text-white flex items-center space-x-1 mt-4 text-xs font-bold bg-zinc-800">
        <span>{buttonText}</span>
      </button>
    </BackgroundGradient>
  </div>
);

export const BackgroundGradientDemo: React.FC = () => {
  return (
    <div className="w-screen max-w-screen-xl relative bottom-20 m-auto flex flex-1 flex-row flex-wrap gap-10 gap-y-20 md:px-0 px-10 justify-center items-center py-10">
      {cardData.map((card, index) => (
        <Card
          key={index}
          src={card.src}
          alt={card.alt}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};
