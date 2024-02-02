import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OeuvresPage from "./pages/OeuvresPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/OeuvresPage" element={<OeuvresPage />} />
            <Route path="/error/:id" element={<ErrorPage />} />
          </Routes>
        </div>
        <SideBar />
      </>
    </Router>
  );
}

export default App;
