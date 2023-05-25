// child component
import React from 'react'

import './Movie.css'

export default function Movie(props) {

    console.log(props)

    const { title, release } = props

    console.log(title, release)

    return (
        <div className='movie-container'>
            <h2>{title}</h2>
            <p>{release}</p>
        </div>
    )
}