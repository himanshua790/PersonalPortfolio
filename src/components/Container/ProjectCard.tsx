type Props = {};
import Image from "next/image";
import styles from "./Container.module.scss";

const ProjectCard = <
  TImage extends {
    src: string;
    alt: string;
  },
  TProjectCard extends {
    heading: string;
    img1: TImage;
    img2: TImage;
    title: string;
    subTitle?: string;
    href: string;
  }
>(
  props: TProjectCard
) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardleft}>
        <h4 className={styles.heading4}>{props.heading}</h4>
      </div>

      <div className={styles.projectCardMiddle}>
        <Image
          // src=
          src={props.img1.src}
          alt={props.img1.alt}
          height={500}
          width={500}
        />
        <Image
          src={props.img2.src}
          alt={props.img2.alt}
          height={100}
          width={100}
        />
        <canvas
          width={642}
          height={836}
          style={{ width: "321px", height: "418px" }}
        />
      </div>
      <div className={styles.projectCardright}>
        <h2 className={`${styles.tenXTechAnim} ${styles.heading2}`}>
          {props.title}
          <br />
          {props.subTitle}
        </h2>
        <a
          rel="noreferrer"
          target="_blank"
          href={props.href}
          className={styles.projectCardlink}
        >
          VIEW SOURCE CODE
        </a>
        <div className={styles.projectCardSocials}>
          <a rel="noreferrer" target="_blank" href="">
            <Image
              src="svg/dribble.svg"
              height={20}
              width={20}
              alt="dribble icon"
              color=""
            />
          </a>
          <a rel="noreferrer" target="_blank" href="">
            <Image
              src="svg/github.svg"
              height={20}
              width={20}
              alt="github icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
