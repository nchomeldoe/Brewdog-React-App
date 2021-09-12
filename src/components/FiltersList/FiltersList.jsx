import React from 'react';
import FilterItem from '../FilterItem';
import styles from "./FiltersList.module.scss";

const FiltersList = (props) => {
    const {toggleAbvFilter, toggleClassicFilter, togglePhFilter} = props;
    return (
        <>
        <section className={styles.filtersList}>
            <h2>Show only:</h2>
            <section className={styles.filterItems}>
                <FilterItem text="High Alcohol (ABV > 6%)" name="alcohol" toggleFilter={toggleAbvFilter}/>
                <FilterItem text="Classic Range (pre 2010)" name="range" toggleFilter={toggleClassicFilter}/>
                <FilterItem text="High Acidity (pH < 4)" name="acidity" toggleFilter={togglePhFilter}/>
            </section>
        </section>
        </>
    )
}

export default FiltersList
