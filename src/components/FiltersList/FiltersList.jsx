import React from 'react';
import FilterItem from '../FilterItem';
import styles from "./FiltersList.module.scss";

const FiltersList = () => {
    return (
        <>
        <h2>Show only:</h2>
        <section>
            <FilterItem text="High Alcohol (ABV > 6%)" name="alcohol"/>
            <FilterItem text="Classic Range (pre 2010)" name="range"/>
            <FilterItem text="High Acidity (pH < 4)" name="acidity"/>
        </section>
        </>
    )
}

export default FiltersList
