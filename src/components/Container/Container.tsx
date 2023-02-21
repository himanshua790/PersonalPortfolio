import styles from "./Container.module.scss";
import ProjectCard from "./ProjectCard";
const Container = () => {
  const data = [
    {
      heading: "HTML, SCSS, JAVASCRIPT, GSAP",
      img1: {
        src: "/project1.webp",
        alt: "himanshu 1 model",
      },
      img2: {
        src: "/project1.webp",
        alt: "himanshu 1 model",
      },
      title: "10xTechLabs",
      // subTitle: "Full-Stack Developer",
      href: "https://www.10xtechlabs.com/",
    },
    {
      heading: "HTML, SCSS, JAVASCRIPT, GSAP",
      img1: {
        src: "/project1.webp",
        alt: "himanshu 2 model",
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
        Hello stranger! 👋, my name is adeola and I am a frontend engineer,
        passionate <br />
        about digital products that help people experience everyday life, not
        endure it.
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
    </main>
  );
};

export default Container;
