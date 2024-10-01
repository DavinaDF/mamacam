import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Traiteur from "./pages/Traiteur"
import Partenaires from "./pages/Partenaires"
import Evenements from "./pages/Evenements"
import About from "./pages/About"
import Contact from "./pages/Contact"


const App = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/home" element={<Home/>}/>
        <Route path="/menu" element={<Home/>}/> */}
        <Route path="/traiteur" element={<Traiteur/>}/>
        <Route path="/partenaires" element={<Partenaires/>}/>
        <Route path="/evenements" element={<Evenements/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
