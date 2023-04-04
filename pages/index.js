import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex flex-col gap-12">
        <section className="flex flex-col items-center text-center">
          <p>
            Hey, I'm Nikita, an interface designer and developer. I enjoy
            crafting beautiful and easy-to-use user interfaces, and building
            them with code.
          </p>
          <p className="text-sm text-neutral-500 max-w-xs mt-6">
            (This is a sample website - you’ll be building a site like this on{" "}
            <a
              href="https://nextjs.org/learn"
              className="text-blue-600 underline decoration-blue-600/40 underline-offset-2"
            >
              our Next.js tutorial
            </a>
            .)
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="font-medium">Recent posts</h2>
          <div className="space-y-4">
            {allPostsData.map(({ id, date, title }) => (
              <div key={id} className="flex gap-8 items-baseline">
                <h4 className="text-sm text-neutral-500 min-w-max">{date}</h4>
                <h2 className="font-medium">{title}</h2>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
