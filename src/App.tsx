import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import Berries from "./pages/Berries";
import "primeflex/primeflex.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import "primereact/resources/primereact.min.css";
import Navbar from "./components/Navbar";
import { Dog } from "./pages/Dog";

function App() {
  return (
    <PrimeReactProvider>
      <PrimeReactContext.Consumer>
        {(primeReact) => {
          console.log(primeReact);
          return (
            <>
              <Navbar />
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
                  {
                    path: "/test/dog",
                    element: <Dog />,
                  },
                  {
                    path: "*",
                    element: <h1>404 Not Found</h1>,
                  },
                ])}></RouterProvider>
            </>
          );
        }}
      </PrimeReactContext.Consumer>
    </PrimeReactProvider>
  );
}

export default App;
