import styles from "./App.module.scss";
import Navbar from "./containers/Navbar";
import Main from "./containers/Main";

const App = () => {
  return (
    <>
    <section className={styles.nav}>
        <Navbar  />
      </section>
      <section className={styles.main}>
        <Main  />
      </section>
    </>
  );
}

export default App;
