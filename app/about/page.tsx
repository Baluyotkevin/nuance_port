// app/about/page.tsx
import Reveal from "@/components/Reveal";

const words = [
  "a production company", "woman-owned.", "obsessed with the details.",
  "vision.", "taste.", "partnership.", "thorough.", "savvy.",
  "inclusive.", "refined.", "an experience.",
];

export default function AboutPage() {
  return <Reveal words={words} image="/images/hero/abouthero2.jpg" />;
}