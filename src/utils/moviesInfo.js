import axios from "axios";

export const loadMovieInfo = (movieId = 'tt1375666') => {
    return axios.get(
        `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${movieId}`,
        {
            headers: {
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "add8dc8169mshf6a83b73487a8fcp1de2a5jsne137e4ced082"
            }
        }
    )
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};


export const searchMovieData = (movieTitle = 'inception') => {
    return axios.get(
        `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movieTitle}`,
        {
            headers: {
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "add8dc8169mshf6a83b73487a8fcp1de2a5jsne137e4ced082"
            }
        }
    )
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err);
        })
};
