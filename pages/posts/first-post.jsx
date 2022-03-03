import Head from "next/head";
// <Head> is used instead of the lowercase <head>. <Head> is a React Component that is built into Next.js. It allows you to modify the <head> of a page.
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        // strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        // onLoad is used to run any JavaScript code immediately after the script has finished loading
        onLoad={() => console.log("Script loaded")}
      />
      <h1>First Post</h1>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </Layout>
  );
}
