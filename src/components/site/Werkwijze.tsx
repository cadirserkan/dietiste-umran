import { Clock } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    n: "01",
    title: "Eerste consultatie",
    duration: "45 – 60 min",
    body: "We nemen uitgebreid de tijd om jouw persoonlijke situatie en doelen in kaart te brengen. Naast je eetpatroon bespreken we ook leefstijlfactoren zoals slaap, stress en beweging. Op basis daarvan stel ik een eerste advies voor, dat je nadien in een overzichtelijk document toegestuurd krijgt.",
  },
  {
    n: "02",
    title: "Tweede consultatie",
    duration: "30 – 45 min",
    body: "Meestal 3 tot 4 weken na de eerste afspraak. We evalueren de voortgang: wat werkte goed en waar loop je tegenaan? Waar nodig sturen we bij en pakken we knelpunten samen aan, zodat je verder groeit richting je doelen.",
  },
  {
    n: "03",
    title: "Vervolgconsulten",
    duration: "20 – 30 min",
    body: "In deze fase focussen we op het onderhouden van je balans en het voorkomen van terugval. We versterken behaalde resultaten en zorgen dat de nieuwe gewoontes echt beklijven.",
  },
];

export function Werkwijze() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="werkwijze" className="px-4 py-24 sm:px-6">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl space-y-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Werkwijze
          </span>
          <h2 className="text-3xl font-light sm:text-4xl">Mijn Werkwijze & Begeleiding</h2>
          <p className="text-foreground/60">
            Een gestructureerde, persoonlijke aanpak gericht op duurzame verandering. Geen
            snelle oplossingen — wél concrete stappen die passen bij jouw leven.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((s) => (
            <article
              key={s.n}
              className="group flex flex-col rounded-3xl border border-border/60 bg-background p-8 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary/10 font-semibold text-primary">
                {s.n}
              </div>
              <h3 className="mb-2 text-xl font-medium">{s.title}</h3>
              <p className="mb-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-accent">
                <Clock className="size-3.5" />
                {s.duration}
              </p>
              <p className="text-sm leading-relaxed text-foreground/70">{s.body}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
