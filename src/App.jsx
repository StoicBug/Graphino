import Home from "./pages/home/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <h1 className="text-3xl font-bold underline text-center text-primary">
              About page
            </h1>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
