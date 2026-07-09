import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    n: "01",
    title: "Onze eerste ontmoeting",
    body: "Tijdens onze eerste afspraak neem ik ruim de tijd voor jou. We praten rustig over je eetgewoontes, maar ook over hoe je slaapt, hoeveel je beweegt en wat er in je leven speelt. Alles hangt namelijk samen. Op basis van dat gesprek stel ik een eerste voedingsadvies op dat helemaal past bij wie jij bent en wat je wilt bereiken. Dat advies stuur ik je na afloop overzichtelijk toe, zodat je er thuis rustig mee aan de slag kunt.",
  },
  {
    n: "02",
    title: "Samen bijsturen",
    body: "Ongeveer drie à vier weken later zien we elkaar opnieuw. Ik ben altijd benieuwd hoe het is gegaan. Wat voelt goed? Waar loop je tegenaan? Soms zijn de eerste veranderingen makkelijker dan gedacht, soms is het net wat zoeken. In dit gesprek kijken we samen wat werkt en waar we iets moeten aanpassen, zodat je verder kunt op een manier die haalbaar blijft.",
  },
  {
    n: "03",
    title: "Op eigen tempo verder",
    body: "In de fase daarna komen we minder vaak samen, maar blijf ik graag betrokken. We bouwen voort op wat je hebt bereikt en zorgen dat je nieuwe gewoontes echt onderdeel worden van je leven. Zo voorkomen we dat je terugvalt in oude patronen en houd je zelf de regie, ook wanneer het even tegenzit.",
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
          <h2 className="text-3xl font-light sm:text-4xl">Zo begeleid ik jou</h2>
          <p className="leading-relaxed text-foreground/60">
            Duurzame verandering ontstaat niet met een streng dieet of een snelle oplossing.
            Het gebeurt in kleine, haalbare stappen, op een tempo dat bij jou past. Zo werken
            we samen.
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
              <h3 className="mb-4 text-xl font-medium">{s.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
