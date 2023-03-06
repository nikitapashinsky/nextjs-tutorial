import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className="flex flex-col items-center text-center">
        <p>
          Hey, I'm Nikita, an interface designer and developer. I enjoy crafting
          beautiful and easy-to-use user interface, and building it with code.
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
      </main>
    </Layout>
  );
}
