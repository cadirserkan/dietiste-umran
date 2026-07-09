import praktijkAsset from "@/assets/praktijkruimte.jpg.asset.json";
import { useReveal } from "@/hooks/use-reveal";

export function Praktijk() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="px-4 py-24 sm:px-6">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl space-y-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            De praktijk
          </span>
          <h2 className="text-3xl font-light sm:text-4xl">
            Een <span className="italic text-primary">rustige</span> plek om te starten
          </h2>
          <p className="text-foreground/60">
            Een lichte, warme praktijkruimte waar je op je gemak bent — de ideale plek voor
            een eerlijk gesprek over voeding en gezondheid.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-black/5">
          <img
            src={praktijkAsset.url}
            alt="De praktijkruimte van Diëtiste Ümran Güney"
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
