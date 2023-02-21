import styles from "./Main.module.scss";
import Container from "./components/Container/Container";
import LandingFooter from "./components/LandingFooter";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
type Props = {};

function App({}: Props) {
  return (
    <>
      <div className={styles.navigationWrapper}>
        <Navigation />
      </div>
      <div className={styles.main}>
        <div className={styles.headerWrapper}>
          <header className={styles.header}>
            <LandingPage />
          </header>
          <LandingFooter />
        </div>
      </div>
      <Container />
    </>
  );
}

export default App;
