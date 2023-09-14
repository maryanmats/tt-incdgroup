import CharacterDetail from "../pages/Character-detail";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LocationDetails from "../pages/Location-details";
import EpisodeDetails from "../pages/Episode-details";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="character-detail/:id" element={<CharacterDetail />} />
        <Route path="location-detail/:id" element={<LocationDetails />} />
        <Route path="episode-detail/:id" element={<EpisodeDetails />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
