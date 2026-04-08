import { useSelector } from "react-redux";
import VideoTitle from "../components/VideoTtile.jsx"
import VideoBackground from "../components/VideoBackground.jsx"

const MainContainer = () => {

    const movie = useSelector((store) => store.movie?.nowPlayingMovie)
    // console.log(movie); 

    if (!movie) return;

    const mainMovie = movie[0]

    return (<>

        <VideoTitle title={mainMovie?.title} description={mainMovie?.overview} />
        <VideoBackground id={mainMovie?.id} />

    </>
    )
};
export default MainContainer;
