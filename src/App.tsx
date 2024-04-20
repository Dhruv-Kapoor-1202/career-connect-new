import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Enroll from "./pages/Enroll";
import Course from "./pages/Course";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
};

export default App;