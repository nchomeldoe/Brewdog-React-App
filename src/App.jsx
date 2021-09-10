import styles from "./App.module.scss";
import Navbar from "./containers/Navbar";
import Main from "./containers/Main";

const App = () => {
  return (
    <>
    <section className={styles.container}>
        <section className={styles.nav}>
          <Navbar  />
        </section>
        <section className={styles.main}>
          <Main  />
        </section>
        <input type="checkbox" id="name" name="name" value="name"/>
      </section>
    </>
  );
}

export default App;
