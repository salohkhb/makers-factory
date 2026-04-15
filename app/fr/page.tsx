import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";

export default function Page() {
  return (
    <>
      <Navbar />

      <Hero
        title="Lancez votre marque de vêtements en 30 jours"
        subtitle="Fabrication en marque blanche avec faible MOQ et qualité premium"
      />

      <Packages
        data={{
          title: "Nos Offres",
          items: [
            {
              name: "Starter",
              desc: "Commencez petit",
              features: [
                "30 pièces",
                "Impression simple",
                "Étiquette basique",
              ],
            },
            {
              name: "Growth",
              desc: "Développez votre marque",
              features: [
                "50+ pièces",
                "Meilleure qualité",
                "Étiquettes personnalisées",
              ],
            },
            {
              name: "Premium",
              desc: "Construisez une vraie marque",
              features: [
                "Branding complet",
                "Broderie",
                "Packaging",
              ],
            },
          ],
        }}
      />

      <Gallery />

      <CTA text="Prêt à lancer votre marque ?" />
    </>
  );
}