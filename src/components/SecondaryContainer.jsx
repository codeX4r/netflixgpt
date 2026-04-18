import { useNowPlayingQuery, usePopularQuery, useTopRatedQuery, useUpcomingQuery } from "../utils/services/movieApi";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const { data: nowPlaying, isLoading: loadingNowPlaying } = useNowPlayingQuery();
    const { data: popular, isLoading: loadingPopular } = usePopularQuery();
    const { data: upcoming, isLoading: loadingUpcoming } = useUpcomingQuery();
    const { data: topRated, isLoading: loadingTopRated } = useTopRatedQuery();

    if (loadingNowPlaying || loadingPopular || loadingTopRated || loadingUpcoming) {
        return (
            <div className="bg-black text-white p-6">
                <h1 className="text-lg animate-pulse">Loading movies...</h1>
            </div>
        );
    }

    if (!nowPlaying || !popular || !topRated || !upcoming) return null;

    return (
        <div
            className="relative z-20

  space-y-3
   bg-black
">
  

            <MovieList movie={nowPlaying} title="Now Playing" />
            <MovieList movie={topRated} title="TopRated" />
            <MovieList movie={popular} title="Popular" />
            <MovieList movie={upcoming} title="Upcoming" />

        </div>
    );
};
export default SecondaryContainer 