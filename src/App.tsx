import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Enroll from "./pages/Enroll";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>

    </>
  )
};

export default App;