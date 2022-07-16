import { Provider } from "react-redux";
import "./styles/App.scss";
import { Recipes, Footer, NavBar } from "./components";

import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Recipes />
      <Footer />
    </Provider>
  );
}

