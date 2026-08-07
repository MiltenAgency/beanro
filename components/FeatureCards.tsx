import { features } from "@/lib/content/home";
import { Reveal } from "@/components/motions/Reveal";

/** The scalloped orange badge carrying each feature's number. */
function Badge({ number }: { number: string }) {
  return (
    <span className="relative inline-flex h-[88px] w-[88px] items-center justify-center">
      <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0 h-full w-full text-orange">
        <path
          fill="currentColor"
          d="M50 0l7.7 7.2 10-3.6 4.6 9.6 10.6.7 1 10.6 9.5 4.8-3.4 10.1L98 47l-6.4 8.5 4.5 9.6-9.2 5.3-.4 10.6-10.6 1.2-5 9.4-9.9-3.8L50 96l-8.2-6.6-9.9 3.8-5-9.4-10.6-1.2-.4-10.6-9.2-5.3 4.5-9.6L2 47l6-7.6-3.4-10.1 9.5-4.8 1-10.6 10.6-.7 4.6-9.6 10 3.6z"
        />
      </svg>
      <span className="t-title relative text-[40px] leading-[48px] text-cream">{number}</span>
    </span>
  );
}

export function FeatureCards() {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {features.map((feature, i) => (
        <Reveal key={feature.number} delay={i * 0.08} distance={100} as="article">
          <div className="relative pt-11">
            <div className="absolute top-0 left-10 z-10">
              <Badge number={feature.number} />
            </div>
            <div className="flex h-full flex-col rounded-[32px] bg-cream px-10 py-20">
              <h3 className="t-title text-[32px] leading-[35.2px] text-brown uppercase">
                {feature.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <p className="mt-12 font-body text-[16px] leading-[27px] text-rust">{feature.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
