import Head from "next/head";
import Main from "../src/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Himanshu Soni 🚀 — Full Stack Developer</title>
        <meta
          name="description"
          content="I'm a self-taught Fullstack Developer and turning ideas into real-life products is my calling."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/orange.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/LogoOne.png" />
        <meta name="theme-color" content="#10101A" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#10101A" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Himanshu Soni 🚀 — Full Stack Developer"
        />
        <meta property="og:url" content="https://himanshusoni.tech/" />
        <meta property="og:image" content="/webp/preview-image.png" />
        <meta
          property="og:description"
          content="I'm a self-taught Fullstack Developer and turning ideas into real-life products is my calling."
        />
        <meta
          name="twitter:title"
          content="Himanshu Soni 🚀 — Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="I'm a self-taught Fullstack Developer and turning ideas into real-life products is my calling."
        />
        <meta name="twitter:image" content="/webp/preview-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://himanshusoni.tech/" />
        <meta name="next-head-count" content="18" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Main />
    </>
  );
}
