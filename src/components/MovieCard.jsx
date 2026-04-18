import { MOVIE_POSTER_URL } from '../utils/constant.js';

const MovieCard = ({ moviePoster }) => {
    if (!moviePoster) return null;

    return (
        <div className="relative group cursor-pointer">

            {/* 🎬 Poster */}
            <img
                className="rounded-md w-full aspect-2/3 object-cover shadow-md"
                src={MOVIE_POSTER_URL + moviePoster}
                alt="poster"
                loading="lazy"
            />

            {/* 🌑 Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 
                      group-hover:opacity-100 
                      transition duration-300 rounded-md"
            />

        </div>
    );
};

export default MovieCard;