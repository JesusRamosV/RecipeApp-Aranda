import { Provider } from "react-redux";
import "./App.scss";
import { Recipes, Footer } from "./components";
import { NavBar } from "./components/NavBar/NavBar";
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
