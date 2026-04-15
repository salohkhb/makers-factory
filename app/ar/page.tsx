import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";

export default function Page() {
  return (
    <div dir="rtl" className="text-right">
      <Navbar />

      <Hero
        title="أطلق علامتك التجارية للملابس في 30 يوم"
        subtitle="تصنيع خاص بجودة عالية وكميات صغيرة"
      />

      <Packages
        data={{
          title: "عروضنا",
          items: [
            {
              name: "البداية",
              desc: "ابدأ بشكل صغير",
              features: [
                "5 قطعة",
                "طباعة بسيطة",
                "ليبل بسيط",
              ],
            },
            {
              name: "النمو",
              desc: "طور ماركتك",
              features: [
                "15+ قطعة",
                "جودة أفضل",
                "ليبل مخصص",
              ],
            },
            {
              name: "بريميوم",
              desc: "ابني ماركة حقيقية",
              features: [
                "براندينغ كامل",
                "تطريز",
                "تغليف",
              ],
            },
          ],
        }}
      />

      <Gallery />

      <CTA text="جاهز تبدا ماركتك؟" />
    </div>
  );
}