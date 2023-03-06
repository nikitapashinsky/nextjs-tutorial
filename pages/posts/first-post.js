import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First post</h1>
      <Link href="/">Back home</Link>
    </>
  );
}
