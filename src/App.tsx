import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import Berries from "./pages/Berries";
import "primeflex/primeflex.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import "primereact/resources/primereact.min.css";

function App() {
  return (
    <PrimeReactProvider>
      <PrimeReactContext.Consumer>
        {(primeReact) => {
          console.log(primeReact);
          return (
            <RouterProvider
              router={createBrowserRouter([
                {
                  path: "/",
                  element: <PokemonList />,
                },
                {
                  path: "/:pokemonName",
                  element: <PokemonDetail />,
                },
                {
                  path: "/berries",
                  element: <Berries />,
                },
              ])}></RouterProvider>
          );
        }}
      </PrimeReactContext.Consumer>
    </PrimeReactProvider>
  );
}

export default App;
