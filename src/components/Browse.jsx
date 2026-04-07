import Header from "./Header";
import { useNowPlayingMovies } from "../utils/hooks/useNowPlayingMovies";

const Browse = () => {
  // calls all movieAPI
useNowPlayingMovies()
  return (
    <>
      <Header />
      <main className="pt-20 bg-black min-h-screen flex flex-col">
        <div className="grow text-amber-200">this is browse</div>
      </main>
    </>
  );
};
export default Browse;
