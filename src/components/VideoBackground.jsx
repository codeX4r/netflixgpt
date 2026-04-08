import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const VideoBackground = ({ id }) => {
  console.log(id)
  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS)
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     .catch(err => console.error(err));
  // }, [])
  {
    return <div>V</div>;
  };
}
export default VideoBackground;