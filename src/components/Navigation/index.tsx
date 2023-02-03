import Image from "next/image";
import Link from "next/link";
import useStyles from "./SocialHandles.styles";

const Navigation = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Link className={classes.brandLogo} href="/">
        <Image
          className="brand-logo__icon"
          src="/LogoOne-removebg-preview.png"
          width={40}
          height={30}
          alt="himanshu logo icon"
        />
        <span className={classes.branchLogoWrapper}>
          <Image
            className="brand-logo__text"
            src="/name_logo.png"
            alt="himanshu logo text"
            width={150}
            height={20}
          />
        </span>
      </Link>

      <div className={classes.toggleButtonWrapper}>
        <span>MENU</span>
        <button className={classes.toggleButton}>
          <svg width="57" height="20" viewBox="0 0 26 20">
            <path
              fill="transparent"
              stroke-width="1.5"
              stroke="#c4c4c4"
              d="M 2 2.5 L 57 2.5"
            ></path>
            <path
              fill="transparent"
              stroke-width="1.5"
              stroke="#c4c4c4"
              d="M 2 9.423 L 57 9.423"
              opacity="1"
            ></path>
            <path
              fill="transparent"
              stroke-width="1.5"
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
