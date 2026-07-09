import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { OverMij } from "@/components/site/OverMij";
import { Werkwijze } from "@/components/site/Werkwijze";
import { Tarieven } from "@/components/site/Tarieven";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <OverMij />
        <Werkwijze />
        <Tarieven />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
