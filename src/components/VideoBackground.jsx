import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constant.js";

export const VideoBackground = ({ id }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS)
      .then((res) => res.json())
      .then((data) => {
        const trailer = data?.results?.find(
          (ele) => ele?.type === "Trailer"
        );
        setTrailerKey(trailer?.key);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">

      {trailerKey && (
        <iframe
          className="absolute top-0 left-0 w-full h-full scale-150 pointer-events-none opacity-90"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${trailerKey}`}
          allow="autoplay; fullscreen"
        />
      )}
    </div>
  );
};