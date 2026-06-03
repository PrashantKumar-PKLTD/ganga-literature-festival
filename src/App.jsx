import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from '@studio-freight/react-lenis';
import "./index.css";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SpeakersPage from "./pages/SpeakersPage";
import SpeakerDetailPage from "./pages/SpeakerDetailPage";
import SchedulePage from "./pages/SchedulePage";
import GalleryPage from "./pages/GalleryPage";
import RegistrationPage from "./pages/RegistrationPage";
import FAQPage from "./pages/FAQPage";

export default function App() {
  return (
    <ReactLenis root>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/speakers/:id" element={<SpeakerDetailPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </ReactLenis>
  );
}
