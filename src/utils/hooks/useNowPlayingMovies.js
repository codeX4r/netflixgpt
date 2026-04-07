import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_API } from "../constant.js";
import { addNowPlayingMovie } from "../stores/movieSlice.js";
import { useDispatch } from "react-redux";

export const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    function getNowPlayingMovies() {
        const options = API_OPTIONS;

        fetch(NOW_PLAYING_API, options)
            .then((res) => res.json())
            .then((res) => {
                console.log(res?.results)
                // add movies to nowPlayingMovies
                dispatch(addNowPlayingMovie(res?.results))
            }
            )
            .catch((err) => console.error(err));
    }
    useEffect(() => getNowPlayingMovies(), []);

};
