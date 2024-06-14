import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
