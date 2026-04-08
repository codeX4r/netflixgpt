import Header from "./Header";
import { useNowPlayingMovies } from "../utils/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer.jsx"

const Browse = () => {
  // calls all movieAPI
  useNowPlayingMovies()
  return (
    <>
      <Header />
      <MainContainer />

    </>
  );
};
export default Browse;
