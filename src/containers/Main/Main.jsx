import React from 'react';
import styles from "./Main.module.scss";
import CardList from "../../components/CardList";

const Main = (props) => {
    const {beers} = props;
    return (
        <>
        <section className={styles.container}>
            <CardList beers={beers}/>
        </section>
        </>
    )
}

export default Main
