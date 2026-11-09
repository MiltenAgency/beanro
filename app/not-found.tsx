import { PillButton } from "@/components/Buttons";

export default function NotFound() {
  return (
    <section className="grid-lines bg-page py-32 text-center lg:py-44">
      <div className="mx-auto max-w-[720px] px-6">
        <h1 className="t-display text-[64px] leading-[1.5] tracking-[-3px] text-brown lg:text-[96px]">
          404
        </h1>
        <p className="mt-6 font-body text-[18px] leading-[27px] text-rust">
          That page has drifted like morning mist. Let’s guide you back to the tea sanctuary.
        </p>
        <PillButton href="/" label="Return to Sanctuary" className="mt-10" />
      </div>
    </section>
  );
}
