import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.root}>
      <Image
        src="svg/footerLogo.svg"
        height={50}
        width={200}
        alt="design and devloped by Himanshu"
        color="red"
      />
    </footer>
  );
};

export default Footer;
