import { Container } from "@/components/Container";
import { Testimonials } from "@/components/Testimonials"; // Import the Testimonials component

export default function TestimonialsPage() {
  return (
    <Container>
      <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
      <Testimonials />
    </Container>
  );
} 