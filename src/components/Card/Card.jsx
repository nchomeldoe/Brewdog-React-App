import React from 'react';
import styles from "./Card.module.scss";

const Card = (props) => {
    const {
            id, 
            name, 
            tagline, 
            first_brewed, 
            description,
            image_url,
            abv,
            ph,
            food_pairing
    } = props.beer;
    return (
        <div className={styles.card}>
                <img src={image_url} alt={name}/>
                <h3>{name}</h3>
                <h4>{tagline}</h4>
                <p>ABV: {abv} | pH: {ph} </p>
                <p className={styles.since}>Since: {first_brewed}</p>
                <p className={styles.description}>{description}</p>
                <h5>Pair with:</h5>
                <li>{food_pairing.map((dish) => (<ul>{dish}</ul>))}</li>
        </div>
    )
}

export default Card
