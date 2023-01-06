/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { SocialHandles } from "../src/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Himanshu Soni</title>
        <meta
          name="description"
          content="Personal Portfolio of Himanshu Soni | Fullstack Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SocialHandles />
      <main className={styles.main}>
        <h1>
          Hi, I'm <span className={styles.mainText}>Himanshu.</span>
          <br />
          I'm a full stack developer.
        </h1>
      </main>
    </>
  );
}
