import React from 'react';
import styles from "./FilterItem.module.scss";

const FilterItem = (props) => {
    const {text, name} = props;
    return (
        <>
        <label htmlFor={name}>{text}</label>
        <input type="checkbox" id={name} name={name} value={name}/> <br/>
        </>
    )
}

export default FilterItem
