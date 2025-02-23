import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a result-oriented Software Engineer <Highlight>(QA testing and backend focused)</Highlight> with years of experience working with Data, SaaS and multi-national financial institutions. Technologies I have worked with include Python (Flask, Django and FastAPI), TypeScript, Bash and JavaScript.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
