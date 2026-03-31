import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import appStore from "./utils/stores/appStore";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
      <Footer />
    </>
  );
};
export default App;
