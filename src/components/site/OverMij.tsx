import foodImg from "@/assets/healthy-food.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function OverMij() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="over-mij" className="bg-secondary/40 px-4 py-24 sm:px-6">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-full bg-primary/10 blur-2xl"
              />
              <img
                src={foodImg}
                alt="Gezonde ingrediënten"
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full rounded-full border-8 border-background object-cover shadow-2xl ring-1 ring-black/5"
              />
            </div>
          </div>

          <div className="space-y-6 md:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Over mij
            </span>
            <h2 className="text-3xl font-light leading-tight sm:text-4xl">
              Mijn naam is Umran Güney
            </h2>
            <div className="space-y-5 leading-relaxed text-foreground/80">
              <p>
                Ik ben diëtiste met een passie voor voeding, gezondheid en het helpen van
                mensen om hun eigen balans te vinden. Als diëtiste blijf ik me graag
                ontwikkelen om steeds op de hoogte te zijn van de nieuwste inzichten op het
                gebied van voeding.
              </p>
              <p>
                Naast diëtiste ben ik ook erkend diabeteseducator. U kan bij mij terecht voor
                een opstarttraject als het zorgtraject diabetes. Samen werken we stap voor
                stap aan jouw persoonlijke doelen, op een manier die bij jouw leven past.
              </p>
              <h3 className="pt-2 text-lg font-medium text-foreground">
                Wat kun je van mij verwachten?
              </h3>
              <p>
                Een persoonlijke aanpak die volledig afgestemd is op jouw behoeften en
                doelen. Iedereen is uniek, en daarom werk ik niet met standaard
                voedingslijsten. Tijdens onze consultaties ontdekken we samen wat voor jou
                werkt, met praktische tips die je direct kunt toepassen in je dagelijkse leven.
              </p>
              <div className="rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
                <p className="text-sm italic text-foreground/80">
                  "Je kunt bij mij terecht op eigen initiatief of met een doorverwijzing van
                  je arts. Vergeet in dat geval de verwijsbrief niet mee te nemen, samen met
                  je meest recente bloedresultaten voor de eerste consultatie."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
