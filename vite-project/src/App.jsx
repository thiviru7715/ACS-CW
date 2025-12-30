import { Routes, Route, HashRouter } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import Layout from "./components/Layout";
import FavouritesPanel from "./components/FavouritePanel";
import { FavouritesProvider } from "./context/FavouritesContext";


function App() {
  return (
    <FavouritesProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SearchPage />} />
            <Route path="property/:id" element={<PropertyPage />} />
          </Route>
        </Routes>
      </HashRouter>
      </FavouritesProvider>
  );
}

export default App;
