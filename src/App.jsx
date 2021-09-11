import styles from "./App.module.scss";
import Navbar from "./containers/Navbar";
import Main from "./containers/Main";
import { getBeers } from "./services/beer.service";
import { useState, useEffect } from "react";

const App = () => {
  const [beers, setBeers] = useState([]);

  useEffect(async () => {
    const apiBeers = await getBeers()
    setBeers(apiBeers)
  }, [])
  

  return (
    <>
    <section className={styles.container}>
        <section className={styles.nav}>
          <Navbar  beers={beers}/>
        </section>
        <section className={styles.main}>
          <Main  beers={beers}/>
        </section>
      </section>
    </>
  );
}

export default App;
