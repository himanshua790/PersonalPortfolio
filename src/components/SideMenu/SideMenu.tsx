import { motion } from "framer-motion";
import React from "react";
import { FiX } from "react-icons/fi";
import styles from "./SideMenu.module.scss";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const SideMenu: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  const sidebarVariants = {
    open: {
      x: 0,
      transition: { ease: "easeInOut" },
    },
    closed: {
      x: "-100%",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className={styles.sidebar}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <div className={styles.sidebarHeader}>
        <FiX className={styles.closeIcon} onClick={toggle} />
      </div>
      <ul className={styles.sidebarMenu}>
        <li className={styles.sidebarMenuItem}>Home</li>
        <li className={styles.sidebarMenuItem}>About</li>
        <li className={styles.sidebarMenuItem}>Services</li>
        <li className={styles.sidebarMenuItem}>Contact</li>
      </ul>
    </motion.div>
  );
};

export default SideMenu;
