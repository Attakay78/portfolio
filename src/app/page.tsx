import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Richard</Heading>
      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          A software engineer with over <strong>four years of experience</strong> building solutions that make life easier—both for developers and the financial world I&apos;ve called home. I&apos;ve worn a few hats along the way, from <strong>QA testing engineer</strong> to <strong>backend developer</strong>, and I&apos;ve loved every minute of solving problems with code.
        </Paragraph>

        <Paragraph className="mt-4">
          My toolkit? <Highlight>Python, JavaScript, and shell scripting</Highlight>—languages I&apos;ve used to craft tools, streamline workflows, and keep complex systems humming at multiple financial companies.
        </Paragraph>
       
        <Paragraph className="mt-4">
          I started out in <strong>QA</strong>, where I got a front-row seat to what makes software tick (and what breaks it). That curiosity pushed me into <strong>backend engineering</strong>, where I&apos;ve spent my time building developer-friendly tools—think scripts that save time or systems that just work. I&apos;m all about practicality: if it helps someone get the job done faster, I&apos;m in.
        </Paragraph>

        <Paragraph className="mt-4">
          What really lights me up, though, is <strong>open-source</strong>. There&apos;s something special about collaborating with folks worldwide to create software anyone can use, tweak, or learn from. Whether I&apos;m contributing to a project or tinkering on my own—like exploring cool libraries such as <Highlight>Pytql</Highlight>—I&apos;m hooked on the idea of giving back to the community that&apos;s taught me so much.
        </Paragraph>

        <Paragraph className="mt-4">When I&apos;m not coding, you&apos;ll probably find me digging into a new tech stack just for fun, sipping tea (stronger than my Wi-Fi signal), or unwinding with a good sci-fi book. I&apos;m a bit of a nerd for clean code and a sucker for a well-placed semicolon. This corner of the web is where I share my journey—tips, projects, and whatever else I&apos;m geeking out about. Glad you&apos;re here—let&apos;s build something awesome together!</Paragraph>
      </div>
      <TechStack />
    </Container>
  );
}
