import styles from "./Container.module.scss";
import ProjectCard from "./ProjectCard";
const Container = () => {
  const data = [
    {
      heading: "SHOPIFY,REDIS, NEXT.JS, REACT.JS",
      img1: {
        src: "/PostedBanner.webp",
        alt: "PostedPod Auto Post",
      },
      img2: {
        src: "/PostedBanner.webp",
        alt: "PostedPod Auto Post",
      },
      title: "PostedPod Auto Post",
      // subTitle: "Full-Stack Developer",
      href: "https://apps.shopify.com/posted-pod",
    },
    {
      heading: "NX, TYPESCRIPT, EXPRESS.JS, HTML, CSS, JAVASCRIPT, MATERIAL UI",
      img1: {
        src: "/project1.webp",
        alt: "10xTechLabs: Case study based learning platform",
      },
      img2: {
        src: "/project1.webp",
        alt: "himanshu 2 model",
      },
      title: "10xTechLabs",
      // subTitle: "Full-Stack Developer",
      href: "https://www.10xtechlabs.com/",
    },
  ];
  return (
    <main className={styles.container}>
      <p className={styles.aboutText}>
        Hello stranger! 👋, my name is himanshu and I am a full stack engineer,
        passionate <br />
        about digital products that help people seamless experience everyday
        life, not endure it.
      </p>
      <section id="sectionProjects" className={styles.sectionProjects}>
        <h1 className={styles.heading1}>
          <span>Yeah, I work hard </span> <small>💼</small>
        </h1>
        <p className={styles.paragraph}>
          Each project is unique. Here are some of my works.
        </p>

        {data?.map((each, index) => (
          <ProjectCard key={`project-${index}`} {...each} />
        ))}
      </section>
      <section className={styles.contactSection}>
        <h1 className={styles.heading1}>
          <span>Sold Yet? </span> <small>🤙</small>
        </h1>
        <h2>
          Thanks for stopping by, I’m currently looking to join a new team of
          creative designers and developers. If you think we might be a good fit
          for one another, give me a
          <a href="tel:+918871778862"> call 🇮🇳 &nbsp;</a>or send me an
          <a
            href="mailto:himanshua790@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            &nbsp; email 📧
          </a>
          .
        </h2>
      </section>
      <section className={styles.socialSection}>
        <h1 className={styles.heading1}>
          <span>Dont be a stranger!</span> <small>👋</small>
        </h1>
        <p className={styles.paragraph}>Connect with me online</p>

        <div className={styles.socialSectionLinks}>
          <a
            href="https://github.com/himanshua790"
            rel="noopener noreferrer"
            target="_blank"
          >
            👾 GitHub
          </a>
          <a
            href="https://twitter.com/codeliteral"
            rel="noopener noreferrer"
            target="_blank"
          >
            🐦 Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/himanshuu-soni/"
            rel="noopener noreferrer"
            target="_blank"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://www.instagram.com/tony_codes"
            rel="noopener noreferrer"
            target="_blank"
          >
            📸 Instagram
          </a>
        </div>
      </section>
    </main>
  );
};

export default Container;
