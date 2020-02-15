import React from 'react'

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
        <div>
            Title: {title}
            Year: {year}
            Length: {length}
            Rating: {rating} ({rating_votes} votes)
            <img
                src={poster}
                alt={title+'poster'}
                height='200px'
                width='200px'
            />
            Plot: {plot}
            Id: {id}
        </div>
    )
};
