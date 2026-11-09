import Image from "next/image";
import Link from "next/link";

import { footer, site } from "@/lib/content/site";
import { Ticker } from "@/components/Ticker";
import { BackToTop } from "@/components/BackToTop";

export function Footer() {
  const { columns } = footer;

  return (
    <footer>
      <Ticker />

      <div className="bg-brown text-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[60px] lg:py-20">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <Link href="/">
              <Image
                src={site.logo}
                alt={site.name}
                width={171}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <h4 className="t-title max-w-[380px] text-[32px] leading-[35.2px] tracking-[-1px] lg:text-right">
              {footer.tagline}
            </h4>
          </div>

          <div className="mt-16 grid gap-12 sm:grid-cols-3">
            <ul className="flex flex-col gap-4">
              {columns.pages.map((page) => (
                <li key={page.label}>
                  <Link
                    href={page.href}
                    className="t-title text-[32px] leading-[35.2px] tracking-[-1px] uppercase transition-colors hover:text-orange"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-start gap-2 sm:items-center sm:text-center">
              <h4 className="t-title text-[24px] leading-none tracking-[-1px] uppercase">
                {columns.contact.heading}
              </h4>
              <a
                href={`mailto:${columns.contact.email}`}
                className="font-body text-[18px] leading-[27px] text-sand transition-colors hover:text-orange"
              >
                {columns.contact.email}
              </a>
              <a
                href={`tel:${columns.contact.phone.replace(/\s/g, "")}`}
                className="font-body text-[18px] leading-[27px] text-sand transition-colors hover:text-orange"
              >
                {columns.contact.phone}
              </a>
              <h4 className="t-title mt-6 text-[24px] leading-none tracking-[-1px] uppercase">
                {columns.contact.placeName}
              </h4>
              <address className="font-body text-[18px] leading-[27px] text-sand not-italic">
                {columns.contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <ul className="flex flex-col gap-4 sm:items-end sm:text-right">
              {columns.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="t-title text-[32px] leading-[35.2px] tracking-[-1px] uppercase transition-colors hover:text-orange"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-24 flex flex-col gap-4 font-body text-[16px] text-sand sm:flex-row sm:items-center sm:justify-between">
            <p>{footer.copyright}</p>
            <Link href={footer.privacy.href} className="transition-colors hover:text-orange">
              {footer.privacy.label}
            </Link>
            <BackToTop label={footer.backToTop} />
          </div>
        </div>

        {/* Oversized brand wordmark */}
        <div className="mx-auto max-w-[1440px] px-6 pb-6 pt-10 sm:pb-8 sm:pt-14 lg:px-[60px] lg:pb-12 lg:pt-16">
          <svg
            viewBox="0 0 2800 340"
            className="h-auto w-full select-none"
            aria-label={footer.logoAlt}
            role="img"
          >
            <text
              x="50%"
              y="240"
              textAnchor="middle"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "270px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                fill: "#FFFFFF",
                opacity: 0.7,
              }}
            >
              KOMOREBI TEAHOUSE
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
