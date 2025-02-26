import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Python",
      src: "/images/logos/Python.png",
      className: "h-10 w-14",
      experience: "4 years",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",
      className: "h-10 w-10",
      experience: "2 years",
    },
    {
      title: "FastAPI",
      src: "/images/logos/fastapi.png",
      className: "h-10 w-8",
      experience: "1 year",
    },
    {
      title: "Django",
      src: "/images/logos/Django.png",
      className: "h-10 w-10",
      experience: "3 years",
    },
    {
      title: "Flask",
      src: "/images/logos/Flask.png",
      className: "h-10 w-12",
      experience: "2 years",
    },
    {
      title: "JavaScript",
      src: "/images/logos/JavaScript.png",
      className: "h-10 w-24",
      experience: "4 years",
    },
    {
      title: "Jenkins",
      src: "/images/logos/Jenkins.png",
      className: "h-10 w-24",
      experience: "2 years",
    },
    {
      title: "MySQL",
      src: "/images/logos/MySQL.png",
      className: "h-10 w-24",
      experience: "3 years",
    },
    {
      title: "PostgresSQL",
      src: "/images/logos/PostgresSQL.png",
      className: "h-10 w-24",
      experience: "2 years",
    },
    {
      title: "Linux",
      src: "/images/logos/Linux.png",
      className: "h-10 w-24",
      experience: "5 years",
    },
    {
      title: "Docker",
      src: "/images/logos/Docker.png",
      className: "h-10 w-24",
      experience: "2 years",
    },
    {
      title: "Bash",
      src: "/images/logos/Bash.png",
      className: "h-10 w-24",
      experience: "3 years",
    },
  ];

  return (
    <div>
      <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <div className="relative group mr-4 mb-4" key={item.src}>
            <Image
              src={item.src}
              width={200}
              height={200}
              alt={item.title}
              className={twMerge("object-contain transition-transform transform hover:scale-110 duration-300", item.className)}
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-xs rounded-lg py-2 px-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-semibold">{item.title}</span> - <span>{item.experience}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
