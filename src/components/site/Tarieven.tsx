import { useReveal } from "@/hooks/use-reveal";

const prices = [
  { label: "Eerste consultatie", note: "+/- 60 minuten", price: "€60" },
  { label: "Tweede consultatie", note: "30 – 45 minuten", price: "€45" },
  { label: "Vervolgconsultatie", note: "20 – 30 minuten", price: "€30" },
];

const mutualiteiten = [
  { name: "Christelijke Mutualiteit (CM)", refund: "€40 per kalenderjaar, indien min. 4 consultaties" },
  { name: "Solidaris", refund: "€10 per consultatie, max. 4 sessies / jaar" },
  { name: "Liberale Mutualiteit", refund: "€10 per consultatie, max. €60 / jaar" },
  { name: "Helan", refund: "€25 per kalenderjaar" },
  { name: "Vlaams & Neutraal Ziekenfonds", refund: "€10 per consultatie, max. €50 / jaar" },
];

export function Tarieven() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="tarieven"
      className="rounded-t-[2rem] bg-[oklch(0.28_0.008_220)] px-4 py-24 text-white sm:rounded-t-[3rem] sm:px-6"
    >
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="mb-12 text-3xl font-light sm:text-4xl">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-primary">
                Tarieven
              </span>
            </h2>
            <ul className="space-y-6">
              {prices.map((p) => (
                <li
                  key={p.label}
                  className="flex items-center justify-between gap-4 border-b border-white/10 pb-6"
                >
                  <div className="min-w-0">
                    <p className="text-base font-medium sm:text-lg">{p.label}</p>
                    <p className="text-sm text-white/50">{p.note}</p>
                  </div>
                  <span className="shrink-0 text-2xl font-light sm:text-3xl">{p.price}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm italic text-white/50">
              Huisbezoeken mogelijk mits aanrekening vervoerskosten.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="mb-2 text-xl font-medium">Terugbetaling ziekenfonds</h3>
            <p className="mb-6 text-sm text-white/60">
              Afhankelijk van je mutualiteit krijg je een deel van de kosten terugbetaald.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-white/40">
                    <th className="pb-4 font-medium">Mutualiteit</th>
                    <th className="pb-4 pl-4 font-medium">Terugbetaling</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {mutualiteiten.map((m) => (
                    <tr key={m.name}>
                      <td className="py-4 pr-4 font-medium text-white/90">{m.name}</td>
                      <td className="py-4 pl-4 text-white/60">{m.refund}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-[11px] text-white/40">
              Vraag bij je mutualiteit het bijhorende attest op na de consultatie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
