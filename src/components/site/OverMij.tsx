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
            Voeding heeft mij altijd gefascineerd. Niet alleen omdat het ons lichaam voedt,
            maar vooral omdat het zo verweven is met wie we zijn, hoe we ons voelen en hoe we
            leven. Als diëtiste help ik mensen elke dag om hun eigen balans te vinden, en dat
            is precies wat ik zo mooi vind aan mijn werk.
          </p>
          <p>
            Naast mijn opleiding tot diëtiste ben ik ook erkend diabeteseducator en
            menopauzeconsulent. Zo kan ik je in verschillende fasen van je leven begeleiden,
            of het nu gaat om een opstarttraject binnen het zorgtraject diabetes, klachten
            rond de menopauze, of gewoon de wens om je gezonder en energieker te voelen.
          </p>
          <p>
            Wat je bij mij mag verwachten? Een luisterend oor en een aanpak die volledig op
            jou is afgestemd. Ik werk niet met strikte voedingslijsten of streng regime,
            omdat ik geloof dat wat voor de één werkt, voor de ander helemaal niet hoeft te
            passen. Samen ontdekken we welke stappen bij jouw leven passen, met praktische
            tips die je meteen kunt toepassen.
          </p>
          <p>
            Je bent bij mij welkom op eigen initiatief of via een doorverwijzing van je
            arts. In dat laatste geval neem je de verwijsbrief mee, samen met je meest
            recente bloedresultaten voor onze eerste afspraak.
          </p>
        </div>

      </div>
    </section>
  );
}
