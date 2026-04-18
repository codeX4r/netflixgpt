import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
    if (!movie?.length) return null;

    return (
        <div className="relative p-2 md:px-12 lg:px-20">

            {/* 🎬 Title */}
            <h1 className=" py-1.5 text-white text-xl md:text-2xl font-semibold mb-4">
                {title}
            </h1>

            {/* 🎞 Row Container */}
            <div className="relative group">

                {/* LEFT GRADIENT (fade effect) */
                    <div className="absolute left-0 top-0 h-full w-2 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
                }

                {/* RIGHT GRADIENT */}
                <div className="absolute right-0 top-0 h-full w-2 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

                {/* 🎥 Scroll Row */}
                <div className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-5 scrollbar-hide scroll-smooth">

                    {movie.map((movi) => (
                        <div
                            key={movi?.id}
                            className="
        min-w-30
        sm:min-w-35
        md:min-w-45
        lg:min-w-50
        transition-transform duration-300
        hover:scale-110 hover:z-20
      "
                        >
                            <MovieCard moviePoster={movi?.poster_path} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default MovieList;