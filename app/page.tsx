import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <footer className="px-6 py-10 text-center text-sm text-dim">© {new Date().getFullYear()} NuanceProductions</footer>
    </>
  );
}
