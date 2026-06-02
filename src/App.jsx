import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import AboutPage from "./pages/AboutPage";
import BlogsPage from "./pages/BlogsPage";
import SiteLayout from "./components/SiteLayout";
import { PAGES } from "./data/pages";
import ContentPage from "./pages/ContentPage";
import FriendOfFestival from "./pages/FriendOfFestival";
import Home from "./pages/Home";
import HotelsPage from "./pages/HotelsPage";
import NewsPage from "./pages/NewsPage";
import PartnersPage from "./pages/PartnersPage";
import ProgrammePage from "./pages/ProgrammePage";
import RegistrationPage from "./pages/RegistrationPage";
import SpeakersPage from "./pages/SpeakersPage";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  return (
    <Router>
      <SmoothScroll />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/festival/friend-of-the-festival" element={<FriendOfFestival />} />
          <Route path="/festival/register-to-attend" element={<RegistrationPage />} />
          <Route path="/festival/book-your-festival-hotel" element={<HotelsPage />} />
          <Route path="/festival/speakers" element={<SpeakersPage />} />
          <Route path="/programme" element={<ProgrammePage />} />
          <Route path="/media/news-updates" element={<NewsPage />} />
          <Route path="/media/blogs" element={<BlogsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          {PAGES.filter((page) => ![
            "/festival/friend-of-the-festival",
            "/festival/register-to-attend",
            "/festival/book-your-festival-hotel",
            "/festival/speakers",
            "/programme",
            "/media/news-updates",
            "/media/blogs",
            "/about",
            "/partners",
          ].includes(page.path)).map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<ContentPage page={page} />}
            />
          ))}
          <Route path="*" element={<ContentPage page={{
            eyebrow: "Page Not Found",
            title: "Page Not Found",
            intro: "The page you are looking for is not available.",
          }} />} />
        </Route>
      </Routes>
    </Router>
  );
}
