import React from "react";
import { socials } from "@/constants/socials";
import Link from "next/link";

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <social.icon className="h-6 w-6 text-gray-500 hover:text-electricBlue" />
        </Link>
      ))}
    </div>
  );
}; 