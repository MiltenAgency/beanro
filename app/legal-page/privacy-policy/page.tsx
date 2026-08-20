import type { Metadata } from "next";

import { privacyPolicy } from "@/lib/content/legal";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motions/Reveal";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.sections[0].body,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow={privacyPolicy.eyebrow} lines={[privacyPolicy.title]} />

      <section className="grid-lines bg-page pb-20 lg:pb-28">
        <div className="mx-auto max-w-[860px] px-6">
          <div className="flex flex-col gap-10 rounded-[32px] bg-cream px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
            {privacyPolicy.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 0.03}>
                <h2 className="t-title text-[28px] leading-[1.15] text-brown uppercase">
                  {section.heading}
                </h2>
                <p className="mt-4 font-body text-[16px] leading-[27px] text-rust">
                  {section.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
