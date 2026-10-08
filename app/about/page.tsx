// app/about/page.tsx
import Reveal from "@/components/Reveal";

const words = [
  "A Production Company", "Woman-Owned", "Obsessed with the details",
  "Vision", "Taste", "Partnership", "Thorough", "Savvy",
  "Inclusive", "Refined", "An Experience",
];

export default function AboutPage() {
  return <Reveal words={words} image="/images/hero/abouthero2.jpg" />;
}