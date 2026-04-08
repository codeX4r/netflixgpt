import { useSelector } from "react-redux";
import VideoTitle from "../components/VideoTtile.jsx"
import { VideoBackground } from "../components/VideoBackground.jsx"

const MainContainer = () => {

    const movie = useSelector((store) => store.movie?.nowPlayingMovie)

    if (!movie?.length) return null;

    const mainMovie = movie[1]
    if (!mainMovie) return null;

    return (
        <div className="relative w-screen h-screen">

            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <VideoBackground id={mainMovie?.id} />
            </div>

            {/* Foreground */}
            <div className="relative z-10 flex items-center h-full px-12 md:px-24">
                <VideoTitle
                    title={mainMovie?.title}
                    description={mainMovie?.overview}
                />
            </div>

        </div>
    );
};
export default MainContainer;
