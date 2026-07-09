import { Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];
  return (
    <footer className="border-t border-border/60 bg-background px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-primary">Diëtiste Ümran Güney</p>
          <p className="mt-1 text-xs text-foreground/50">
            © {new Date().getFullYear()} — Alle rechten voorbehouden.
          </p>
        </div>
        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid size-9 place-items-center rounded-full bg-secondary text-foreground/50 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
