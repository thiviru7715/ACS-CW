import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import Layout from "./components/Layout";
import FavouritesPanel from "./components/FavouritePanel";
import { FavouritesProvider } from "./context/FavouritesContext";

function App() {
  return (
    <FavouritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SearchPage />} />
            <Route path="property/:id" element={<PropertyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </FavouritesProvider>
  );
}

export default App;
