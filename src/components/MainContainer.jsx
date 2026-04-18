import { useNowPlayingQuery } from "../utils/services/movieApi.js";
import { VideoBackground } from "./VideoBackground";
import VideoTitle from "./VideoTtile";

const MainContainer = () => {
    const { data: movie, isLoading } = useNowPlayingQuery();

    if (isLoading || !movie?.length) return null;

    const mainMovie = movie[11];

    return (
        <div className="relative h-screen w-full text-white overflow-hidden">

            {/* 🎬 Video */}
            <VideoBackground id={mainMovie?.id} />

            {/* 🌑 Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>

            {/* 🎯 Content */}
            <div className="
    absolute bottom-12 left-4 right-4
    md:bottom-20 md:left-16 md:right-auto
    max-w-md md:max-w-xl
    z-10
  ">
                <VideoTitle
                    title={mainMovie?.title}
                    description={mainMovie?.overview}
                />
            </div>

        </div>
    );
};

export default MainContainer;