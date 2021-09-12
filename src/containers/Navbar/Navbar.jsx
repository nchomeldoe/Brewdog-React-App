import React from 'react';
import styles from "./Navbar.module.scss";
import SearchBox from "../../components/SearchBox";
import FiltersList from "../../components/FiltersList";

const Navbar = (props) => {
    const {toggleAbvFilter, toggleClassicFilter, togglePhFilter, setSearch} = props;
    return (
        <>
        <section className={styles.container}>
            <div className={styles.header}>
                <h1>
                    Brewdog Beer
                </h1>
                <h1>
                    Back Catalogue
                </h1>
            </div>
            <section>
                <SearchBox setSearch={setSearch}/>
            </section>
            <section>
                <FiltersList toggleAbvFilter={toggleAbvFilter} toggleClassicFilter={toggleClassicFilter} togglePhFilter={togglePhFilter}/>
            </section>
            </section>
        </>
    )
}

export default Navbar
