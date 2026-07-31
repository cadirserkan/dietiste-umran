import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { useReveal } from "@/hooks/use-reveal";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      toast.success("Bericht verzonden", {
        description: "Bedankt! Ik neem zo snel mogelijk contact met je op.",
      });
      form.reset();
      setSubmitting(false);
    }, 600);
  };

  const infos = [
    {
      icon: MapPin,
      label: "Adres",
      value: "Krugerstraat 161, 2660 Antwerpen-Hoboken",
    },
    { icon: Phone, label: "Telefoon", value: "0485 22 28 17", href: "tel:+32485222817" },
    {
      icon: Mail,
      label: "E-mail",
      value: "dietiste-umran@outlook.com",
      href: "mailto:dietiste-umran@outlook.com",
    },
  ];

  const inputCls =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15";

  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Contact
              </span>
              <h2 className="mb-6 mt-4 text-3xl font-light sm:text-4xl">Neem Contact Op</h2>
              <p className="max-w-md text-foreground/60">
                Klaar om de eerste stap te zetten? Ik kijk ernaar uit om samen met jou aan de
                slag te gaan.
              </p>
            </div>

            <div className="space-y-6">
              {infos.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <div className="grid size-12 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                        {label}
                      </p>
                      <p className="mt-1 font-medium text-foreground">{value}</p>
                    </div>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-4 rounded-2xl p-2 -m-2 transition-colors hover:bg-secondary/50"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="flex items-start gap-4">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-5 rounded-3xl border border-border/60 bg-secondary/40 p-6 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="naam"
                  className="text-xs font-semibold uppercase tracking-wider text-foreground/60"
                >
                  Naam
                </label>
                <input id="naam" name="naam" required className={inputCls} />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="telefoon"
                  className="text-xs font-semibold uppercase tracking-wider text-foreground/60"
                >
                  Telefoon
                </label>
                <input id="telefoon" name="telefoon" type="tel" className={inputCls} />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-wider text-foreground/60"
              >
                E-mailadres
              </label>
              <input id="email" name="email" type="email" required className={inputCls} />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="bericht"
                className="text-xs font-semibold uppercase tracking-wider text-foreground/60"
              >
                Bericht
              </label>
              <textarea
                id="bericht"
                name="bericht"
                rows={5}
                required
                className={`${inputCls} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-medium text-primary-foreground shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg disabled:opacity-70"
            >
              {submitting ? "Verzenden …" : "Verzend bericht"}
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
