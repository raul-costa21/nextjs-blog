import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // paths contains the array of known paths returned by getAllPostIds() that will be pre-render, which include the params defined by pages/posts/[id].js
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // any paths not returned by getStaticPaths will result in a 404 page.
    // If fallback is blocking, then new paths will be server-side rendered with getStaticProps, and cached for future requests so it only happens once per path.
    // If fallback true: paths returned from getStaticPaths will be rendered to HTML at build time and the paths that have not been generated at build time will serve a “fallback” version of the page on the first request to such a path, in the background Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
