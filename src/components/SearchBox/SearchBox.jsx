import React from 'react';
import styles from "./SearchBox.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBox = (props) => {
    const {setSearch} = props;
    return (
        <>
        <section className={styles.search}>
            <input type="search" name="search" onInput={(e) => setSearch(e.target.value)}/>
            <label htmlFor="search"><FontAwesomeIcon icon={faSearch} /></label>
            <p>Search by name, food pairing or ABV</p>
        </section>
        </>
    )
}

export default SearchBox
