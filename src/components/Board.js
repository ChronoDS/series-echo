import React from "react";
import './Board.scss'
import {Movie} from "./Movie";
import {watchList} from "../utils/watchList";
import {loadMovieInfo, searchMovieData} from "../utils/moviesInfo";

export const Board = props => {

    // const loadData = item => searchMovieData(item)
    //     .then(value => value.titles[0].id)
    //     .then(id => loadMovieInfo(id))
    //     .then(movie => {
    //         // console.log('Bottom-line Media Data: ', movie);
    //         return <Movie {...movie}/>
    //     });

    return (
        <div className='Board'>
            {watchList.map((show) => {
                    return <Movie key={show.title} {...show}/>
                }
            )}
        </div>
    )
};
