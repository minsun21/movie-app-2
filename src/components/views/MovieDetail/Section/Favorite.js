import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Favorite({ movieInfo, id }) {
    const movieId = movieInfo.movieId;
    const movieTitle = movieInfo.title;
    const moviePost = movieInfo.backdrop_path;
    const movieRunTime = movieInfo.runtime;

    const [FavoriteNumber, setFavoriteNumber] = useState(0);
    const [Favorited, setFavorited] = useState(false);

    // let variables = {
    //     userFrom: 3,
    //     movieId: movieId,
    //     movieTitle: movieTitle,
    //     moviePost: moviePost,
    //     movieRunTime: movieRunTime
    // }

    useEffect(() => {
        let body = {
            body: "1",
        };
        axios.post('/api/favorite/favoriteNumber', body).then(response => {
            console.log(response.data);
            // setFavoriteNumber(response.data.favoriteNumber);
        });

        // axios.post('/api/favorite/favorited', variables).then(response => {
        //     console.log(response.data);
        //     setFavorited(response.data.favorited);
        // });
    }, []);

    const onClickFavorite = () => {
        let variable = {
            memberId: 3,
            movieId
        }
        if (Favorited) {
            axios.post('/api/favorite/removeFromFavorite', variable).then(response => {
                console.log(response.data);
                setFavoriteNumber(FavoriteNumber + 1);
                setFavorited(!Favorited);
            });
        } else {
            console.log(variable)
            axios.post('/api/favorite/addToFavorite', variable).then(response => {
                console.log(response.data);
                // setFavoriteNumber(FavoriteNumber - 1);
                // setFavorited(!Favorited);
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
