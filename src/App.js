import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.css";
import "./components/Hero/Hero.css";
import Explore from "./components/Explore/Explore";
import "./components/Explore/Explore.css";
import "./components/Footer/Footer.css";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import "./components/Search/Search.css";
import "./components/Search/Card.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
