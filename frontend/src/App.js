import "./App.scss";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
