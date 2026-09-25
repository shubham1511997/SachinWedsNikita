"use client";

import { useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  Clock3,
  Heart,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const sections = ["Welcome", "Our story", "The celebration", "Details"];

export default function Page() {
  const [active, setActive] = useState("Welcome");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (section: string) => {
    setActive(section);
    setMenuOpen(false);
    document
      .getElementById(section.toLowerCase().replaceAll(" ", "-"))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f2e9] text-[#4f2527]">
      <nav className="fixed inset-x-0 top-0 z-30 border-b border-[#b8955d]/20 bg-[#f6f2e9]/45 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <button
            onClick={() => navigate("Welcome")}
            className="font-serif text-xl tracking-[0.15em] text-[#752f32]"
            aria-label="Go to welcome"
          >
            S & N
          </button>
          <div className="hidden items-center gap-8 md:flex">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => navigate(section)}
                className={`text-[11px] uppercase tracking-[0.22em] transition-colors ${active === section ? "text-[#a06a28]" : "text-[#7d6760] hover:text-[#752f32]"}`}
              >
                {section}
              </button>
            ))}
          </div>
          <button
            className="rounded-full p-2 text-[#752f32] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#b8955d]/20 bg-[#f6f2e9] px-6 py-4 md:hidden">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => navigate(section)}
                className="block w-full py-3 text-left text-xs uppercase tracking-[0.2em] text-[#7d6760]"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section
        id="welcome"
        className="relative flex min-h-screen items-center justify-center px-6 pt-20 text-center"
        style={{
          position: "relative",
          backgroundImage: "url('/SachinWedsNikita/hero_bg.png')",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#752f3266",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        />
        <div className="absolute left-[8%] top-32 h-32 w-32 rounded-full bg-[#d49b48]/10 blur-3xl" />
        <div className="absolute bottom-20 right-[5%] h-48 w-48 rounded-full bg-[#8e3d3a]/10 blur-3xl" />
        <div className="animate-fade-in relative max-w-3xl">
          <div className="mx-auto mb-10 flex items-center justify-center gap-4 text-[#b4884c]">
            <span className="h-px w-16 bg-[#b4884c]/60" />
            <span className="text-2xl">ॐ</span>
            <span className="h-px w-16 bg-[#b4884c]/60" />
          </div>
          <p className="mb-5 text-xs uppercase tracking-[0.38em] text-[#a06a28]">
            With the blessings of our families
          </p>
          <h1 className="font-serif text-6xl leading-[0.9] tracking-[-0.04em] text-[#b4884c] sm:text-9xl">
            Sachin <span className="font-light italic text-[#752f32]">&</span>{" "}
            Nikita
          </h1>
          <p className="mx-auto mt-9 max-w-md font-serif text-lg leading-relaxed text-[#555]">
            invite you to share in the joy of their wedding celebration
          </p>
          <div className="mt-12 flex items-center justify-center gap-5 text-sm text-[#b8955d]">
            <span className="h-px w-8 bg-[#752f32]" />
            <span className="font-medium tracking-[0.22em]">
              20 . 11 . 2026
            </span>
            <span className="h-px w-8 bg-[#752f32]" />
          </div>
          <button
            onClick={() => navigate("The celebration")}
            className="group mt-16 inline-flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#a06a28]"
          >
            Discover the celebration{" "}
            <ChevronDown size={17} className="animate-bounce" />
          </button>
        </div>
      </section>

      <section
        id="our-story"
        className="border-y border-[#b8955d]/20 bg-[#eee7da] px-6 py-28 sm:py-36"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#a06a28]">
            A little beginning
          </p>
          <h2 className="mt-5 font-serif text-5xl text-[#752f32] sm:text-6xl">
            Two hearts, one beautiful journey
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#765b55]">
            Some stories are written in the stars. Ours began with a chance
            meeting, grew through countless conversations, and found its forever
            in the promise we make to each other.
          </p>
          <div className="mt-12 flex justify-center text-[#b4884c]">
            <Heart size={23} fill="currentColor" strokeWidth={1} />
          </div>
        </div>
      </section>

      <section id="the-celebration" className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a06a28]">
              The festivities
            </p>
            <h2 className="mt-5 font-serif text-5xl text-[#752f32] sm:text-6xl">
              Join us in celebration
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            <Event
              title="Lagan & Lunch"
              date="Wednesday, 18 November"
              time="1:00 PM onwards"
              detail="An evening of colour, music and joyful beginnings."
            />
            <Event
              title="Sangeet"
              date="Thursday, 18 November"
              time="7:00 PM onwards"
              detail="Let’s dance, laugh and celebrate the families coming together."
              featured
            />
            <Event
              title="Haldi"
              date="Friday, 20 November"
              time="11:00 AM onwards"
              detail="The morning with Haldi, Music and Fun."
            />
            <Event
              title="Baraat"
              date="Friday, 20 November"
              time="7:00 PM onwards"
              detail="The sacred ceremony, followed by dinner and blessings."
              featured
            />
          </div>
        </div>
      </section>

      <section
        id="details"
        className="bg-[#752f32] px-6 py-28 text-[#f6f2e9] sm:py-32"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d7b276]">
            The venue
          </p>
          <h2 className="mt-5 font-serif text-5xl sm:text-6xl">
            Daana Courtyard
          </h2>
          <p className="mt-5 text-[#e8d8c3]">Rohtak, Haryana</p>
          <div className="mx-auto mt-14 grid max-w-lg gap-7 border-y border-[#d7b276]/30 py-8 sm:grid-cols-2">
            <div className="flex items-center justify-center gap-3">
              <CalendarDays size={19} className="text-[#d7b276]" />
              <span>Friday, 20 November</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock3 size={19} className="text-[#d7b276]" />
              <span>7:00 PM onwards</span>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/cJyFrGXASEA2LKQH9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 border border-[#d7b276]/60 px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#f6e8d0] transition-colors hover:bg-[#d7b276] hover:text-[#752f32]"
          >
            <MapPin size={16} /> Get directions
          </a>
        </div>
      </section>

      <footer className="bg-[#f6f2e9] px-6 py-14 text-center">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5">
          <div className="text-2xl text-[#b4884c]">ॐ</div>
          <p className="font-serif text-2xl text-[#752f32]">
            We can’t wait to celebrate with you
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#a06a28]">
            Sachin & Nikita
          </p>
          <div className="mt-5 h-px w-16 bg-[#b8955d]/60" />
          <p className="text-xs text-[#987d73]">With love, their families</p>
        </div>
      </footer>
    </main>
  );
}

function Event({
  title,
  date,
  time,
  detail,
  featured = false,
}: {
  title: string;
  date: string;
  time: string;
  detail: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`group border p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${featured ? "border-[#a06a28] bg-[#752f32] text-[#f6f2e9]" : "border-[#b8955d]/40 bg-[#f9f6ef] text-[#4f2527]"}`}
    >
      <div
        className={`mx-auto mb-7 h-px w-10 ${featured ? "bg-[#d7b276]" : "bg-[#b4884c]"}`}
      />
      <h3 className="font-serif text-3xl">{title}</h3>
      <p
        className={`mt-5 text-sm ${featured ? "text-[#e8d8c3]" : "text-[#a06a28]"}`}
      >
        {date}
      </p>
      <p
        className={`mt-1 text-xs uppercase tracking-[0.16em] ${featured ? "text-[#d7b276]" : "text-[#987d73]"}`}
      >
        {time}
      </p>
      <p
        className={`mt-7 text-sm leading-7 ${featured ? "text-[#f0dfca]" : "text-[#765b55]"}`}
      >
        {detail}
      </p>
    </article>
  );
}
