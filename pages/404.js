import Head from "next/head";
import Layout from "../components/layout";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - Sauce Not Found</title>
      </Head>
      <h1>404 - Sauce Not Found</h1>
      <p>Looks like this page does not exist</p>
    </Layout>
  )
  }