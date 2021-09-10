import React from 'react';
import styles from "./Navbar.module.scss";
import SearchBox from "../../components/SearchBox";
import FiltersList from "../../components/FiltersList";

const Navbar = () => {
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
                <SearchBox />
            </section>
            <section>
                <FiltersList />
            </section>
            </section>
        </>
    )
}

export default Navbar
