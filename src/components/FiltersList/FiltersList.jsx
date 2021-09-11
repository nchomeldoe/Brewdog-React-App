import React from 'react';
import FilterItem from '../FilterItem';
import styles from "./FiltersList.module.scss";

const FiltersList = () => {
    return (
        <>
        <section className={styles.filtersList}>
            <h2>Show only:</h2>
            <section className={styles.filterItems}>
                <FilterItem text="High Alcohol (ABV > 6%)" name="alcohol"/>
                <FilterItem text="Classic Range (pre 2010)" name="range"/>
                <FilterItem text="High Acidity (pH < 4)" name="acidity"/>
            </section>
        </section>
        </>
    )
}

export default FiltersList
