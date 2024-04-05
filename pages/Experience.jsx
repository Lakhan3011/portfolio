import React from "react";
import html from "../public/html.png";
import css from "../public/css.png";
import github from "../public/github.png";
import javascript from "../public/javascript.png";
import nextjs from "../public/nextjs.png";
import react from "../public/react.png";
import node from "../public/node.png";
import typescript from "../public/ts.png";
import prisma from "../public/prisma.png";
import tailwind from "../public/tailwind.png";
import aws from "../public/aws.png";
import mongo from "../public/mongo.webp";
import Image from "next/image";

function Experience() {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-zinc-700 dark:shadow-white",
    },
    {
      id: 7,
      src: prisma,
      title: "PrismaORM",
      style: "shadow-gray-800 dark:shadow-slate-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: node,
      title: "Node",
      style: "shadow-lime-500",
    },
    {
      id: 10,
      src: typescript,
      title: "Typescript",
      style: "shadow-sky-500",
    },
    {
      id: 11,
      src: aws,
      title: "AWS",
      style: "shadow-orange-500",
    },
    {
      id: 12,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-500",
    },
  ];

  return (
    <div className="bg-white w-full min-h-screen dark:bg-gray-900 dark:text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md  hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <Image src={src} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
