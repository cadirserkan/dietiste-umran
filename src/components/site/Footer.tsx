import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-primary">Diëtiste Ümran Güney</p>
          <p className="mt-1 text-xs text-foreground/50">
            © {new Date().getFullYear()} — Alle rechten voorbehouden.
          </p>
        </div>
        <a
          href="https://www.instagram.com/dietiste_umran/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="grid size-10 place-items-center rounded-full bg-secondary text-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <Instagram className="size-4" />
        </a>
      </div>
    </footer>
  );
}
