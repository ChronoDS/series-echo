import React, {useEffect, useState} from 'react'
import './Movie.scss'
import {loadMovieInfo, searchMovieData} from "../utils/moviesInfo";

export const Movie = ({
                          title,
                          // episode,
                          // season,
                          // year,
                          // description,
                          // image,
                          // length,
                          // rating,
                          // rating_votes,
                          // poster,
                          // plot,
                      }) => {
    console.log('data arriving to Movie  ==>> ', title);
    const [show,setShow] = useState(undefined);
    const [plot, setPlot] = useState();
    const [length, setLength] = useState();
    const [rating, setRating] = useState();
    const [rating_votes, setRatingVotes] = useState();
    const [poster, setPoster] = useState();
    useEffect(() => {
        searchMovieData(title)
            .then(value => value.titles[0].id)
            .then(id => loadMovieInfo(id))
            .then(show => {
                console.log('Bottom-line Media Data: ', show);
                setShow(show);
                setPlot(show.plot);
                setLength(show.length);
                setRating(show.rating);
                setRatingVotes(show.rating_votes);
                setPoster(show.poster);
                return show;
            })
    }, [title]);

    return (
        <div className='movie-card'>
            {title ? <h3>{title}</h3> : null}
            {/*{show.season ? <h3>{show.season}</h3> : null}*/}
            {/*{show.episode ? <h3>{show.episode}</h3> : null}*/}
            {/*{show.year ? <h4> Year: {show.year} </h4> : null}*/}
            {length ? <h5>Length: {length}</h5> : null}
            {rating ? <h6>Rating: {rating} {rating_votes ? <span>({rating_votes} votes)</span> : null} </h6>  : null}
            { poster ?
                <img
                src={poster ? poster : null}
                alt={title+'poster'}
                height='150px'
                width='150px'
            />
            : null }
            {plot ? <h6>Plot: {plot}</h6> : null}
        </div>
    )
};
