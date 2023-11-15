import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import NavigationBar from "./components/NavBar/NavigationBar.jsx";
import Login from "./pages/Login.jsx";
import Seasonal from "./pages/Seasonal.jsx";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import Perks from "./pages/Perks.jsx";
import Story from "./pages/Story.jsx";
import Mission from "./pages/Mission.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import TnC from "./pages/TnC.jsx";
import FindABoutique from "./pages/FindABoutique.jsx";
import Locate from "./pages/Locate.jsx";
import Custom from "./pages/Custom.jsx";

function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter basename="/cs2024/tut03grp5">
        <Routes >
          {/* <Route path="/" Component={Home}></Route> */}

          <Route path="/" element={Home}></Route>
          <Route path="/login" element={Login}></Route>
          <Route path="/seasonal" element={Seasonal}></Route>
          <Route path="/products" element={Products}></Route>
          <Route path="/product" element={Product}></Route>
          <Route path="/perks" element={Perks}></Route>
          <Route path="/story" element={Story}></Route>
          <Route path="/mission" element={Mission}></Route>
          <Route path="/contact" element={Contact}></Route>
          <Route path="/faq" element={FAQ}></Route>
          <Route path="/tnc" element={TnC}></Route>
          <Route path="/locate" element={Locate}></Route>
          <Route path="/findaboutique" element={FindABoutique}></Route>
          <Route path="/custom" element={Custom}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
