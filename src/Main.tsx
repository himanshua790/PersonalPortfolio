import styles from "./Main.module.scss";
import Navigation from "./components/Navigation";
import LandingPage from "./pages/LandingPage/LandingPage";
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
        </div>
      </div>
    </>
  );
}

export default App;
