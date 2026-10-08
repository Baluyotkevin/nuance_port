import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1440px] px-6 pb-16 md:px-24">
      <h2 className="mb-4 text-lg">Contact</h2>
      <a href={`mailto:${profile.email}`} className="text-3xl underline underline-offset-8 md:text-6xl">{profile.email}</a>
      <ul id="socials" className="mt-8 flex flex-wrap gap-6 text-lg">
        {profile.socials.map((s) => (
          <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.label}</a></li>
        ))}
      </ul>
    </section>
  );
}
