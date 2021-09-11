const API_URL = "https://api.punkapi.com/v2/beers";

export const getBeers = () => {
    return fetch(`${API_URL}?per_page=80`)
                .then((res) => res.json())
                .catch(err => console.error(err))
}