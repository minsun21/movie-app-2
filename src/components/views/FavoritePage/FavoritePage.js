import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './table.css';
import { Popover } from 'antd';
import { IMAGE_BASE_URL } from '../../Config';

function FavoritePage() {
    const [Favorites, setFavorites] = useState([]);
    useEffect(() => {
        fetchFavoredMovie();
    }, []);

    const onClickDelete = (movieId, userFrom) => {
        const variable = {
            movieId,
            userFrom
        }
        Axios.post('/api/favorite/removeFromFavorite', variable).then(response => {
            fetchFavoredMovie();
        });
    };

    const fetchFavoredMovie = () => {
        Axios.post('/api/favorite/getFavoredMovie', 'userId').then(response => {
            setFavorites(response.data.favorites);
        });
    };
    const renderCards = Favorites.map((favorite, index) => {
        const content = (
            <div>
                {favorite.moviePost ?
                    <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} /> : "no image"}
            </div>
        )
        return <tr key={index}>
            <Popover content={content} title={`${favorite.movieTitle}`}>
                <td>{favorite.movietTitle}</td>
            </Popover>
            <td>{favorite.movieRuntime} mins</td>
            <td><button onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}>Remove</button></td>
        </tr>
    })

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h2>Favorite Movies</h2>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie Runtime</th>
                        <th>Movie from favorites</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCards}
                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage
