import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First post</h1>
      <Link href="/">Back home</Link>
    </Layout>
  );
}
