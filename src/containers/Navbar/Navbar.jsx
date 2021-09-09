import React from 'react';
import styles from "./Navbar.module.scss";
import SearchBox from "../../components/SearchBox";
import FiltersList from "../../components/FiltersList";

const Navbar = () => {
    return (
        <>
        <div>
            Navbar works
        </div>
        <section>
            <SearchBox />
        </section>
        <section>
            <FiltersList />
        </section>
        </>
    )
}

export default Navbar
