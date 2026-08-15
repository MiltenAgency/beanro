import { brewsSection } from "@/lib/content/home";
import { Hero } from "@/components/home/Hero";
import { Statement } from "@/components/home/Statement";
import { StandardSection } from "@/components/home/StandardSection";
import { StirBlock } from "@/components/home/StirBlock";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { SectionHeading } from "@/components/SectionHeading";
import { MenuTabs } from "@/components/MenuTabs";
import { FeatureCards } from "@/components/FeatureCards";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { ClosingCta } from "@/components/ClosingCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />

      <section className="grid-lines bg-page pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-[60px]">
          <div className="rounded-[32px] bg-cream px-6 py-16 lg:px-[60px] lg:py-20">
            <SectionHeading lines={brewsSection.lines} blurb={brewsSection.blurb} />
            <div className="mt-20">
              <MenuTabs />
            </div>
          </div>
        </div>
      </section>

      <StandardSection />
      <StirBlock />

      <section className="grid-lines bg-page py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-[60px]">
          <FeatureCards />
        </div>
      </section>

      <Testimonials />
      <AboutTeaser />
      <Faq />
      <ClosingCta />
    </>
  );
}
