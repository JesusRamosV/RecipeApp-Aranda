import "../src/styles/styles.scss"
import { Recipes, Footer, NavBar } from "./components";


export const App = () => {
  return (
    <>
      <NavBar />
      <Recipes />
      <Footer />
    </>
  );
}

