import React from 'react';
import styles from "./SearchBox.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBox = () => {
    return (
        <>
        <section className={styles.search}>
            <input type="search" results="1" name="search"/>
            <label htmlFor="search"><FontAwesomeIcon icon={faSearch} /></label>
            <p>Search by name, tagline, description, food pairing, pH or ABV</p>
        </section>
        </>
    )
}

export default SearchBox
