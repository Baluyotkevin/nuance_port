import { creditLists } from "@/lib/data";

export default function Skills() {
  return (
    <section aria-label="Skills" className="mx-auto max-w-[1440px] px-4 pt-16 pb-16 md:px-10 md:pb-24">
      <div className="grid grid-cols-2 gap-x-4 md:grid-cols-4">
        {creditLists.map((credit) => (
          <ul key={credit.id} className="space-y-1 text-base md:text-lg">
            <li>{credit.name}</li>
          </ul>
        ))}
      </div>
    </section>
  );
}
