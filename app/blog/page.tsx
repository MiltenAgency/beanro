import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { posts } from "@/lib/content/blog";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { Reveal } from "@/components/motions/Reveal";

export const metadata: Metadata = {
  title: "Tea Journal",
  description: "Stories, craft and Japanese tea culture from Komorebi Teahouse.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Tea Chronicles & News" lines={["Essays On Japanese", "Tea & Mindful Living"]} />

      <section className="grid-lines bg-page pb-20 lg:pb-28">
        <ul className="mx-auto grid max-w-[1440px] gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-[60px]">
          {posts.map((post, i) => (
            <Reveal key={post.slug} as="li" delay={(i % 3) * 0.08} distance={100}>
              <Link href={`/blog/${post.slug}`} className="group flex flex-col">
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    width={1648}
                    height={1276}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-6 flex items-center gap-4 font-body text-[16px] leading-[27.2px] font-medium uppercase">
                  <span className="text-brown-soft">{post.category}</span>
                  <span className="text-rust">{post.date}</span>
                </div>

                <h2 className="t-title mt-3 text-[28px] leading-[1.15] text-brown uppercase transition-colors group-hover:text-orange">
                  {post.title}
                </h2>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <ClosingCta />
    </>
  );
}
