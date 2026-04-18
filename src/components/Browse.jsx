import { useSelector } from "react-redux"
import Header from "./Header";
import { useNowPlayingQuery } from "../utils/services/movieApi.js";
import MainContainer from "./MainContainer.jsx"
import SecondaryContainer from "./SecondaryContainer.jsx"
import GptSearch from "./GptSearch.jsx";

const Browse = () => {

  const isGpt = useSelector((store) => store.gpt.showGpt)

  // calls all movieAPI
  useNowPlayingQuery()
  return (
    <>
      <Header />
      {isGpt ? (<>
        <GptSearch />
      </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

    </>
  );
}
export default Browse;
