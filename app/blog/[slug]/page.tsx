import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { adjacentPosts, getPost, posts } from "@/lib/content/blog";
import { ClosingCta } from "@/components/ClosingCta";
import { Reveal } from "@/components/motions/Reveal";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const intro = post.body.find((b) => b.type === "section");
  return {
    title: post.title,
    description: intro && intro.type === "section" ? intro.paragraphs[0] : undefined,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const { previous, next } = adjacentPosts(post.slug);

  return (
    <>
      {/* Article column is 1112px wide in the original, not a narrow measure. */}
      <article className="grid-lines bg-page pt-[77px] pb-20">
        <div className="mx-auto max-w-[1112px] px-6 lg:px-0">
          <Reveal>
            <h1 className="t-display mx-auto max-w-[1050px] text-center text-[36px] leading-[1.5] tracking-[-1.5px] text-brown sm:text-[52px] lg:text-[70px] lg:leading-[105px] lg:tracking-[-4px]">
              {post.heroTitle}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={120}
                height={120}
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
              <div>
                <p className="t-title text-[26px] leading-[28px] text-brown uppercase">
                  {post.author.name}
                </p>
                <p className="font-body text-[16px] leading-[22px] text-rust">{post.author.role}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} scale={0.97}>
            <div className="mt-12 aspect-[1112/640] overflow-hidden rounded-[32px] lg:rounded-[40px]">
              <Image
                src={post.cover}
                alt={post.title}
                width={1648}
                height={1276}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-[60px] flex flex-col gap-16">
            {post.body.map((block, i) =>
              block.type === "section" ? (
                <Reveal key={`${block.heading}-${i}`}>
                  <h2 className="t-title text-[32px] leading-[48px] text-brown uppercase lg:text-[40px]">
                    {block.heading}
                  </h2>
                  {block.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="mt-[22px] font-body text-[16px] leading-[22.4px] text-brown"
                    >
                      {paragraph}
                    </p>
                  ))}
                </Reveal>
              ) : (
                <Reveal key={`${block.src}-${i}`} scale={0.97}>
                  <div className="aspect-[1112/506] overflow-hidden rounded-[24px]">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={1648}
                      height={1100}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
              ),
            )}
          </div>

          <nav className="mt-[83px] flex items-start justify-between gap-6">
            <Link href={`/blog/${previous.slug}`} className="group max-w-[45%]">
              <h3 className="t-title text-[40px] leading-[48px] text-brown uppercase transition-colors group-hover:text-orange">
                Previous Blog
              </h3>
              <p className="mt-2 font-body text-[16px] leading-[27px] text-rust">
                {previous.title}
              </p>
            </Link>
            <Link href={`/blog/${next.slug}`} className="group max-w-[45%] text-right">
              <h3 className="t-title text-[40px] leading-[48px] text-brown uppercase transition-colors group-hover:text-orange">
                Next Blog
              </h3>
              <p className="mt-2 font-body text-[16px] leading-[27px] text-rust">{next.title}</p>
            </Link>
          </nav>
        </div>
      </article>

      <ClosingCta />
    </>
  );
}
