import { profile } from "@/lib/data";


export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1440px] px-6 py-16 md:px-24 md:py-24">
      <h2 className="mb-6 text-lg">About</h2>
      <div className="max-w-2xl space-y-4 text-xl leading-relaxed text-lime/90">
        {profile.bio.map((p) => <p key={p}>{p}</p>)}
      </div>
    </section>
  );
}
