import { motion } from "framer-motion";
import React from "react";
import { FiX } from "react-icons/fi";
import ComingSoon from "../ComingSoon";
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
      <ComingSoon />
    </motion.div>
  );
};

export default SideMenu;
