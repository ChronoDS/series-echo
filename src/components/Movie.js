import React from 'react'
import './Movie.scss'

export const Movie = ({
                          id,
                          title,
                          year,
                          length,
                          rating,
                          rating_votes,
                          poster,
                          plot,
                      }) => {

    return (
        <div className='movie-card'>
            <h3>{title}</h3>
            {year ? <h4> Year: {year} </h4> : null}
            {length ? <h5>Length: {length}</h5> : null}
            {rating ? <h6>Rating: {rating} {rating_votes ? <span>({rating_votes} votes)</span> : null} </h6>  : null}
            <img
                src={poster}
                alt={title+'poster'}
                height='150px'
                width='150px'
            />
            {plot ? <h6>Plot: {plot}</h6> : null}
        </div>
    )
};
