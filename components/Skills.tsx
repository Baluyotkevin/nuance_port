import { creditLists } from "@/lib/data";

export default function Skills() {
  return (
    <section aria-label="Skills" className="mx-auto max-w-[1440px] px-4 pt-16 pb-16 md:px-10 md:pb-24">
      <h2 className="mb-6 text-2xl md:mb-10 md:text-4xl">Partners</h2>

      <div className="grid grid-cols-2 gap-x-4 opacity-60 md:grid-cols-4">
        {creditLists.map((credit) => (
          <ul key={credit.id} className="space-y-1 text-base md:text-lg">
            <li>{credit.name}</li>
          </ul>
        ))}
      </div>
    </section>
  );
}
