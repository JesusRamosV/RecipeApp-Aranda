import { Provider } from "react-redux";
import "./App.scss";
import { NavBar, Recipes, Footer } from "./components";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Recipes />
      <Footer />
    </Provider>
  );
}

export default App;
