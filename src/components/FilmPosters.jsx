import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './FilmsPosterStyles.module.css';

const FilmPosters = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get('https://localhost:7095/api/Films/byfiltersandsorting', {
                    params: {    
                        pageNumber: 1,
                        pageSize: 30,
                        sortByDate: '',
                        sortByPopularity: ''
                    },
                });

                setFilms(response.data);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    console.log(films);

    return (
        <div>
            {films.map((film, index) => (
                <>
                    <p>Film number: {index}</p>
                    <div key={index} className={styles["posters-container"]}>
                        <img src={`data:image/jpeg;base64,${film.poster}`} alt="" />
                        <img src={`data:image/jpeg;base64,${film.posterPartOne}`} alt="" />
                        <img src={`data:image/jpeg;base64,${film.posterPartTwo}`} alt="" />
                        <img src={`data:image/jpeg;base64,${film.posterPartThree}`} alt="" />
                    </div>
                    <hr />
                </>
            ))}
        </div>
    );
}

export default FilmPosters;
