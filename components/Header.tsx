"use client";
import { nav } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const navLogo = "/images/logo/logo3.svg";

  return (
    <header className="pointer-events-none sticky top-0 z-50 pt-4 pb-4 md:pt-10 md:pb-10">
      <div
        className="
          pointer-events-auto
          mx-auto flex items-center justify-between
          w-[calc(100%-2rem)] max-w-[300px] h-10 px-4
          md:max-w-[490px] md:h-[72px] md:px-7
          bg-black/40 backdrop-blur-sm
        "
      >
        <Link href="/" className="flex items-center">
          <Image
            src={navLogo}
            alt="Logo"
            width={200}
            height={200}
            className="h-auto w-[120px] md:w-[200px]"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="flex items-center gap-2 md:gap-5"
        >
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[8px] transition-opacity hover:opacity-60 md:text-lg"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}