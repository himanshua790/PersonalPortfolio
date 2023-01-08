/* eslint-disable react/no-unescaped-entities */
import { Montserrat } from "@next/font/google";
import Head from "next/head";
import Navigation from "../src/components/Navigation";
import { LandingPage } from "../src/pages";
const montserrat = Montserrat();

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
      <Navigation />
      <main className={montserrat.className}>
        <LandingPage />
      </main>
    </>
  );
}
