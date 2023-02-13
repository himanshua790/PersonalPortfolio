import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.main}>
      <Link className={styles.brandLogo} href="/">
        <Image
          className="brand-logo__icon"
          src="/LogoOne-removebg-preview.png"
          width={40}
          height={30}
          alt="himanshu logo icon"
        />
        <span className={styles.branchLogoWrapper}>
          <Image
            className={styles.brandLogoText}
            src="/name_logo.png"
            alt="himanshu logo text"
            width={150}
            height={20}
          />
        </span>
      </Link>

      <div className={styles.toggleButtonWrapper}>
        <span>MENU</span>
        <button className={styles.toggleButton}>
          <svg width="57" height="20" viewBox="0 0 26 20">
            <path
              fill="transparent"
              strokeWidth="1.5"
              stroke="#c4c4c4"
              d="M 2 2.5 L 57 2.5"
            ></path>
            <path
              fill="transparent"
              strokeWidth="1.5"
              stroke="#c4c4c4"
              d="M 2 9.423 L 57 9.423"
              opacity="1"
            ></path>
            <path
              fill="transparent"
              strokeWidth="1.5"
              stroke="#c4c4c4"
              d="M 2 16.346 L 27 16.346"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
