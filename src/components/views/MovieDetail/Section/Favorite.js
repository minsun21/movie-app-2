import Axios from 'axios'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Favorite(props) {
    const movieId = props.movieId;
    const movieTitle = props.movieInfo.title;
    const moviePost = props.movieInfo.backdrop_path;
    const movieRunTime = props.movieInfo.runtime;

    const [FavoriteNumber, setFavoriteNumber] = useState(0);
    const [Favorited, setFavorited] = useState(false);

    useEffect(() => {
        let variables = {
            movieId
        }
        axios.post('/api/favorite/favoriteNumber', variables).then(response => {
            console.log(response.data);
            setFavoriteNumber(response.data.favoriteNumber);
        });

        axios.post('/api/favorite/favorited', variables).then(response => {
            console.log(response.data);
            setFavorited(response.data.favorited);
        });
    }, []);
    const onClickFavorite = () => {
        let variable = {

        }
        if (Favorited) {
            axios.post('api/favorite/removeFromFavorite', variable).then(response => {
                console.log(response.data);
                setFavoriteNumber(FavoriteNumber + 1);
                setFavorited(!Favorited);
            });
        } else {
            axios.post('api/favorite/addToFavorite', variable).then(response => {
                console.log(response.data);
                setFavoriteNumber(FavoriteNumber - 1);
                setFavorited(!Favorited);
            });
        }
    }
    return (
        <div>
            <button onClick={onClickFavorite}>{Favorite ? "Not Favorite" : "Add to Favorite "}{FavoriteNumber}</button>
        </div>
    )
}

export default Favorite;
