import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function Hero() {
  const textRef = useReveal<HTMLDivElement>();
  const imgRef = useReveal<HTMLDivElement>();

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] size-[520px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-[-10%] size-[420px] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div ref={textRef} className="reveal space-y-8">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Erkend Diëtiste · Diabeteseducator
          </span>
          <h1 className="text-4xl font-light leading-[1.1] text-foreground sm:text-5xl md:text-6xl">
            Jouw eerste stap naar een{" "}
            <span className="italic text-primary">betere levensstijl</span>
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-foreground/70 sm:text-lg">
            Ik ben Umran, diëtiste met een passie voor voeding en gezondheid. Ik help je graag
            stap voor stap om een gezonde balans te vinden die bij jouw leven past — zonder
            strikte diëten, maar met een duurzame aanpak. Samen werken we aan jouw doelen.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://rosa.be/nl/hp/umran-guney/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              Maak een afspraak
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#werkwijze"
              className="inline-flex items-center rounded-xl bg-secondary px-7 py-4 text-sm font-medium text-foreground transition-all hover:bg-secondary/70"
            >
              Lees meer over mijn werkwijze
            </a>
          </div>
        </div>

        <div ref={imgRef} className="reveal relative">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-secondary/60 rotate-2"
          />
          <img
            src={heroImg}
            alt="Diëtiste Ümran Güney"
            width={1200}
            height={1500}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl ring-1 ring-black/5"
          />
        </div>
      </div>
    </section>
  );
}
