import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Enroll from "./pages/Enroll";
import Course from "./pages/Course";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import { Toaster } from "@/components/ui/sonner";

import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <SpeedInsights />
    </>
  );
};

export default App;
//
