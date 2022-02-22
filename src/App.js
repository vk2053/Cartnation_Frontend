import "./App.css";
import Carousell from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Electronics from "./pages/Electronics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grocery from "./pages/Grocery";
import Sports from "./pages/Sports";
import Fashion from "./pages/Fashion";

function App() {
  return <>
  <BrowserRouter>
        <Routes>
        <Route path="/carousel" element={<Carousell />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/fashion" element={<Fashion />} />
        </Routes>
      </BrowserRouter>
  {/* <Navbar /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <Footer /> */}
  {/* <Carousell /> */}
  {/* <Carousell /> */}
  </>;
}

export default App;
