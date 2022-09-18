import Navbar from "./Navbar";
import "./App.css";
import "./style.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
