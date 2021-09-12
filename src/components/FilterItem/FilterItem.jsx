import React from 'react';
import styles from "./FilterItem.module.scss";

const FilterItem = (props) => {
    const {text, name, toggleFilter} = props;
    return (
        <>
        <section className={styles.filters}>
            <label htmlFor={name}>{text}</label>
            <input type="checkbox" id={name} name={name} value={name} onChange={toggleFilter}/> <br/>
        </section>
        </>
    )
}

export default FilterItem
