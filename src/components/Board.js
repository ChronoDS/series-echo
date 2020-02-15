import React, {useEffect, useState} from "react";
import './Board.scss'
import {Movie} from "./Movie";
import {loadMovieInfo, searchMovieData} from "../utils/moviesInfo";

export const Board = props => {
    const [movie, setMovie] = useState(undefined);
    useEffect(() => {
        // loadMovieInfo()
        //     .then(value => {
        //         console.log('loadMovieInfo: ', value);
        //         setMovie(value);
        //     });
        searchMovieData('rick and morty')
            .then(value => {
                console.log('searchMovieData: ', value);
                return value.titles[0].id
                // setMovie(value);
            })
            .then(id => {
                return loadMovieInfo(id)
            })
            .then(value => setMovie(value))
    }, []);

    return (
        <div className='Board'>
            {props.children}
            <Movie {...movie}/>
        </div>
    )
};
