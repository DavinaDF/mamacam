import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Traiteur from "./pages/Traiteur";
import Partenaires from "./pages/Partenaires";
import Evenements from "./pages/Evenements";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/traiteur" element={<Traiteur />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/evenements" element={<Evenements />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions" element={<Mentions />} />
      </Routes>
      <Footer />
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
