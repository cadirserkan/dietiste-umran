import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <a
          href="https://www.instagram.com/dietiste_umran/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="grid size-11 place-items-center rounded-full bg-secondary text-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <Instagram className="size-4" />
        </a>
        <p className="max-w-2xl text-sm leading-relaxed text-foreground/70 sm:text-base">
          Ümran Güney <span className="mx-2 text-foreground/30">|</span> Erkend Diëtiste,
          Diabeteseducator &amp; Menopauzeconsulent{" "}
          <span className="mx-2 text-foreground/30">|</span> RIZIV-nummer: 5/65342/71/701
        </p>
        <p className="text-xs text-foreground/50">
          © {new Date().getFullYear()} Diëtiste Ümran Güney — Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
