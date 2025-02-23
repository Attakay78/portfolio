import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Pythgon",
      src: "/images/logos/Python.png",

      className: "h-10 w-14",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",

      className: "h-10 w-10",
    },
    {
      title: "FastAPI",
      src: "/images/logos/fastapi.png",

      className: "h-10 w-8",
    },
    {
      title: "Django",
      src: "/images/logos/Django.png",

      className: "h-10 w-10",
    },
    {
      title: "Flask",
      src: "/images/logos/Flask.png",

      className: "h-10 w-12",
    },
    {
      title: "JavaScript",
      src: "/images/logos/JavaScript.png",

      className: "h-10 w-24",
    },
    {
      title: "Jenins",
      src: "/images/logos/Jenkins.png",

      className: "h-10 w-24",
    },
    {
      title: "MySQL",
      src: "/images/logos/MySQL.png",

      className: "h-10 w-24",
    },
    {
      title: "PostgresSQL",
      src: "/images/logos/PostgresSQL.png",

      className: "h-10 w-24",
    },
    {
      title: "Linux",
      src: "/images/logos/Linux.png",

      className: "h-10 w-24",
    },
    {
      title: "Docker",
      src: "/images/logos/Docker.png",

      className: "h-10 w-24",
    },
    {
      title: "Bash",
      src: "/images/logos/Bash.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
