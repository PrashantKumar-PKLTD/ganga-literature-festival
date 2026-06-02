import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import SiteLayout from "./components/SiteLayout";
import { PAGES } from "./data/pages";
import ContentPage from "./pages/ContentPage";
import Home from "./pages/Home";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  return (
    <Router>
      <SmoothScroll />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          {PAGES.map((page) => (
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
