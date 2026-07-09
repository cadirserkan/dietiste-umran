import { useReveal } from "@/hooks/use-reveal";

export function OverMij() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="over-mij" className="bg-secondary/40 px-4 py-28 sm:px-6 md:py-32">
      <div ref={ref} className="reveal mx-auto max-w-3xl">
        <div className="space-y-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Over mij
          </span>
          <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Mijn naam is <span className="italic text-primary">Ümran Güney</span>
          </h2>
        </div>

        <div className="mx-auto mt-14 space-y-6 text-left leading-relaxed text-foreground/80 sm:text-lg">
          <p>
            Ik ben diëtiste met een passie voor voeding, gezondheid en het helpen van mensen om
            hun eigen balans te vinden. Als diëtiste blijf ik me graag ontwikkelen om steeds op
            de hoogte te zijn van de nieuwste inzichten op het gebied van voeding.
          </p>
          <p>
            Naast diëtiste ben ik ook erkend diabeteseducator. U kan bij mij terecht voor een
            opstarttraject als het zorgtraject diabetes. Samen werken we stap voor stap aan
            jouw persoonlijke doelen, op een manier die bij jouw leven past.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl space-y-5">
          <h3 className="text-center text-xl font-medium text-foreground">
            Wat kun je van mij verwachten?
          </h3>
          <p className="text-center leading-relaxed text-foreground/75">
            Een persoonlijke aanpak die volledig afgestemd is op jouw behoeften en doelen.
            Iedereen is uniek, en daarom werk ik niet met standaard voedingslijsten. Tijdens
            onze consultaties ontdekken we samen wat voor jou werkt, met praktische tips die je
            direct kunt toepassen in je dagelijkse leven.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border/60 bg-background p-6 shadow-sm sm:p-8">
          <p className="text-center text-sm italic leading-relaxed text-foreground/75 sm:text-base">
            "Je kunt bij mij terecht op eigen initiatief of met een doorverwijzing van je arts.
            Vergeet in dat geval de verwijsbrief niet mee te nemen, samen met je meest recente
            bloedresultaten voor de eerste consultatie."
          </p>
        </div>
      </div>
    </section>
  );
}
