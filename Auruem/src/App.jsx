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
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/seasonal" Component={Seasonal}></Route>
          <Route path="/products" Component={Products}></Route>
          <Route path="/product" Component={Product}></Route>
          <Route path="/perks" Component={Perks}></Route>
          <Route path="/story" Component={Story}></Route>
          <Route path="/mission" Component={Mission}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/faq" Component={FAQ}></Route>
          <Route path="/tnc" Component={TnC}></Route>
          <Route path="/locate" Component={Locate}></Route>
          <Route path="/findaboutique" Component={FindABoutique}></Route>
          <Route path="/custom" Component={Custom}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
