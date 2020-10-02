import React, { Fragment, useEffect, useState } from 'react';
import '../../../css/LandingPage.css';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from './Sections/MainImage';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';

function LandingPage() {
    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage] = useState(null);
    const [CurrentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endpoint);
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint).then(response => response.json()).then(response => {
            console.log(response)
            setMovies([...Movies, ...response.results]);
            setMainMovieImage(response.results[0]);
            setCurrentPage(response.page);
        });
    }
    const loadMoreItems = () => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(endpoint);
    }

    return (
        <div className="main">
            {MainMovieImage &&
                <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                    title={MainMovieImage.original_title}
                    desc={MainMovieImage.overview} />}
            <div className="header">
                <h2>Movies by latest</h2>
                <hr />
                {/* Movie Grid Cars*/}
                <Row gutter={[16, 16]}>
                    {Movies && Movies.map((movie, index) => (
                        <Fragment key={index}>
                            <GridCards
                                landingPage
                                movieId={movie.id}
                                movieName={movie.original_title}
                                image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null} />
                        </Fragment>
                    ))}
                </Row>
            </div>
            <div className="contents">
                <button onClick={loadMoreItems}>LoadMore</button>
            </div>
        </div >
    )
}

export default LandingPage
