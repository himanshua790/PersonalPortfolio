import { useState } from "react";
import styles from "./Main.module.scss";
import Container from "./components/Container/Container";
import LandingFooter from "./components/LandingFooter";
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout/Layout";
import Navigation from "./components/Navigation/Navigation";
import SideMenu from "./components/SideMenu/SideMenu";
type Props = {};

function App({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    console.log("toggle");
    setIsOpen(!isOpen);
  };

  return (
    <Layout>
      <div className={styles.navigationWrapper}>
        <Navigation isOpen={isOpen} toggle={toggleSidebar} />
      </div>
      <SideMenu isOpen={isOpen} toggle={toggleSidebar} />
      <div className={styles.main}>
        <div className={styles.headerWrapper}>
          <header className={styles.header}>
            <LandingPage />
          </header>
          <LandingFooter />
        </div>
      </div>
      <Container />
    </Layout>
  );
}

export default App;
