import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">

      {/* Hero Image */}
      <div className="relative h-[60vh] w-full overflow-hidden md:h-[65vh] [@media(hover:hover)]:cursor-none">
        <Image
          src="/images/hero/contacthero.jpg"
          alt="Hero"
          priority
          fill
          className="object-cover"
        />
      </div>

      {/* Let's Connect */}
      <section className="flex items-center justify-center px-4 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="flex flex-col items-center gap-10 text-center">

          <h1 className="text-2xl md:text-4xl">
            Let&apos;s Connect
          </h1>

          <div className="flex flex-col gap-1 text-sm md:text-lg">

            <a
              href="mailto:fran@welcometothenuance.com"
              className="hover:opacity-60"
            >
              fran@welcometothenuance.com
            </a>

            <a
              href="mailto:jakerris@welcometothenuance.com"
              className="hover:opacity-60"
            >
              jakerris@welcometothenuance.com
            </a>

          <a
            href="https://instagram.com/welcometothenuance"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center gap-2 text-sm transition-opacity hover:opacity-60 md:text-lg"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 md:h-9 md:w-9"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="0.75"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>


          </div>
        </div>
      </section>

    </main>
  );
}