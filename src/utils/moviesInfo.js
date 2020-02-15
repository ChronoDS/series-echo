import axios from "axios";

export const loadMovieInfo = (movie = 'inception') => {
    return axios.get(
        'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666',
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


export const searchMovieData = (movie = 'inception') => {
    return axios.get(
        'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception',
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
