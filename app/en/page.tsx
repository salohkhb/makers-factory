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
        title="Launch Your Clothing Brand in 30 Days"
        subtitle="Private label manufacturing with low MOQ and premium quality"
      />

      <Packages
        data={{
          title: "Our Packages",
          items: [
            {
              name: "Starter",
              desc: "Start small",
              features: ["5 pieces", "Basic print", "Simple label"],
            },
            {
              name: "Growth",
              desc: "Scale your brand",
              features: ["15+ pieces", "Better quality", "Custom labels"],
            },
            {
              name: "Premium",
              desc: "Build a real brand",
              features: ["Full branding", "Embroidery", "Packaging"],
            },
          ],
        }}
      />

      <Gallery />

      <CTA text="Ready to start your brand?" />
    </>
  );
}