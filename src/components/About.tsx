"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.JPG",
    "/images/img4.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">

        <Paragraph className="mt-4">Hi, I&apos;m Richard Quaicoe, a software engineer with over four years of experience building solutions that make life easier—both for developers and the financial world I&apos;ve called home. I&apos;ve worn a few hats along the way, from QA testing engineer to backend developer, and I&apos;ve loved every minute of solving problems with code. My toolkit? Python, JavaScript, and shell scripting—languages I&apos;ve used to craft tools, streamline workflows, and keep complex systems humming at multiple financial companies.</Paragraph>

        <Paragraph className="mt-4"> I started out in QA, where I got a front-row seat to what makes software tick (and what breaks it). That curiosity pushed me into backend engineering, where I&apos;ve spent my time building developer-friendly tools—think scripts that save time or systems that just work. I&apos;m all about practicality: if it helps someone get the job done faster, I&apos;m in.</Paragraph>
       
       <Paragraph className="mt-4">What really lights me up, though, is open-source. There&apos;s something special about collaborating with folks worldwide to create software anyone can use, tweak, or learn from. Whether I&apos;m contributing to a project or tinkering on my own—like exploring cool libraries such as Pytql—I&apos;m hooked on the idea of giving back to the community that&apos;s taught me so much.</Paragraph>

       <Paragraph className="mt-4">When I&apos;m not coding, you&apos;ll probably find me digging into a new tech stack just for fun, sipping tea (stronger than my Wi-Fi signal), or unwinding with a good sci-fi book. I&apos;m a bit of a nerd for clean code and a sucker for a well-placed semicolon. This corner of the web is where I share my journey—tips, projects, and whatever else I&apos;m geeking out about. Glad you&apos;re here—let&apos;s build something awesome together!</Paragraph>
      </div>
    </div>
  );
}
