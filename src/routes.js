import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import { FavoritesProvider } from "./contexts/Favorites";
import VideoCadastre from "./pages/VideoCadastre";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watch/:id" element={<Watch />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="/cadastre" element={<VideoCadastre />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}
