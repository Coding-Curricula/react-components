// parent component 
import React from 'react'

import Movie from './Movie'

import './MovieListings.css'

const styles = {
    backgroundColor: "pink"
}

export default function MovieListings() {
    const movies = [
        { id: 1, title: 'Lords of Dogtown', releaseDate: '2005-06-03' },
        { id: 2, title: 'Adventureland', releaseDate: '2009-04-03' },
        { id: 3, title: 'The Matrix', releaseDate: '1999-03-31' },
        { id: 4, title: 'The Matrix Reloaded', releaseDate: '2003-05-07' },
        { id: 5, title: 'The Matrix Revolutions', releaseDate: '2003-10-27' },
        { id: 6, title: 'The Matrix 4', releaseDate: '2021-12-22' },
    ]

    return (
        <div className='movie-listings-container' style={styles}>
            <h1>Movie Listings</h1>
            {movies.map((movie, index) => {
                return <Movie key={index} title={movie.title} release={movie.releaseDate} />
            })}
        </div>
    )
}
