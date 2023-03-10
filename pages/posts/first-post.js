import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '/Users/admin/Desktop/Projects/dc_webapp/nextjs-blog/components/layout'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}


