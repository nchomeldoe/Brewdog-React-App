import styles from "./App.module.scss";
import Navbar from "./containers/Navbar";
import Main from "./containers/Main";
import { getBeers } from "./services/beer.service";
import { useState, useEffect } from "react";

const App = () => {
  const [beers, setBeers] = useState([]);

  const [abvFilter, setAbvFilter] = useState(false);
  const [classicFilter, setClassicFilter] = useState(false);
  const [phFilter, setPhFilter] = useState(false);
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    const getData = async () => {
    const apiBeers = await getBeers();
    let displayedBeers = apiBeers;

    if(abvFilter) {
      displayedBeers = displayedBeers.filter(beer => beer.abv && beer.abv > 6)
    }
    if(phFilter) {
      displayedBeers = displayedBeers.filter(beer => beer.ph && beer.ph < 4)
    }
    if(classicFilter) {
      displayedBeers = displayedBeers.filter((beer) => {
        const year = beer.first_brewed.slice(3);
        return year < 2010
      })
    }
    if(search){
      displayedBeers = displayedBeers.filter((beer) => {
       const beerName = beer.name.toLowerCase();
       const beerPairing = beer.food_pairing.join(" ").toLowerCase();
       const beerAbv = beer.abv.toString();
       const searchTerm = search.toLowerCase();
       return beerName.includes(searchTerm) || beerPairing.includes(searchTerm) || beerAbv.includes(searchTerm)
      })
    }
    setBeers(displayedBeers)
    };
    getData()
  }, [abvFilter, classicFilter, phFilter, search])

  

  const toggleAbvFilter = () => {
    setAbvFilter(!abvFilter)
  }

  const toggleClassicFilter = () => {
    setClassicFilter(!classicFilter)
  }

  const togglePhFilter = () => {
    setPhFilter(!phFilter)
  }

  console.log("abv", abvFilter, "classic", classicFilter, "pH", phFilter, "search", search)


  return (
    <>
    <section className={styles.container}>
        <section className={styles.nav}>
          <Navbar  beers={beers} toggleAbvFilter={toggleAbvFilter} toggleClassicFilter={toggleClassicFilter} togglePhFilter={togglePhFilter} setSearch={setSearch}/>
        </section>
        <section className={styles.main}>
          <Main  beers={beers}/>
        </section>
      </section>
    </>
  );
}

export default App;
