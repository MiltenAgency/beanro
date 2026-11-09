import type { Metadata } from "next";
import Image from "next/image";

import { aboutHero, aboutStory, stats, team } from "@/lib/content/about";
import { PageHero } from "@/components/PageHero";
import { Counter } from "@/components/Counter";
import { FeatureCards } from "@/components/FeatureCards";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { ClosingCta } from "@/components/ClosingCta";
import { Reveal } from "@/components/motions/Reveal";

export const metadata: Metadata = {
  title: "About Our Heritage",
  description: aboutHero.body,
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={aboutHero.eyebrow} lines={aboutHero.lines} body={aboutHero.body} />

      <section className="grid-lines bg-page pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-[60px]">
          <Reveal scale={0.96}>
            <div className="overflow-hidden rounded-[40px] lg:rounded-[60px]">
              <Image
                src={aboutHero.image.src}
                alt={aboutHero.image.alt}
                width={1350}
                height={760}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="grid-lines bg-page py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-[60px]">
          <FeatureCards />
        </div>
      </section>

      <section className="grid-lines bg-page pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-[60px]">
          {stats.map((stat, i) => (
            <Counter key={stat.label} {...stat} delay={i * 0.06} />
          ))}
        </div>
      </section>

      <section className="grid-lines bg-page pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-[60px]">
          <Reveal direction="right" distance={250}>
            <div className="overflow-hidden rounded-[40px] lg:rounded-[60px]">
              <Image
                src={aboutStory.image.src}
                alt={aboutStory.image.alt}
                width={1350}
                height={1040}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal direction="left" distance={250}>
              <h2 className="t-display text-[32px] leading-[1.5] tracking-[-1px] text-brown sm:text-[40px] lg:text-[48px] lg:leading-[72px] lg:tracking-[-2px]">
                {aboutStory.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-8 max-w-[560px] font-body text-[18px] leading-[27px] text-rust">
                {aboutStory.body}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="grid-lines bg-page pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-[60px]">
          <Reveal>
            <h2 className="t-display text-center text-[32px] leading-[1.5] tracking-[-1px] text-brown sm:text-[40px] lg:text-[48px] lg:leading-[72px] lg:tracking-[-2px]">
              {team.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.members.map((member, i) => (
              <Reveal key={member.name} as="li" delay={i * 0.08} distance={100}>
                <div className="overflow-hidden rounded-[24px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={880}
                    height={1100}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="t-title mt-6 text-[32px] leading-[35.2px] text-brown uppercase">
                  {member.name}
                </h3>
                <p className="mt-1 font-body text-[16px] leading-[27px] text-rust">{member.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />
      <Faq />
      <ClosingCta />
    </>
  );
}
