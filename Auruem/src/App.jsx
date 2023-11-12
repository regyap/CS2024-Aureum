import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Page2 from "./pages/Page2";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavBar/NavigationBar.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/Login" Component={Login}></Route>
          <Route path="/Footer" Component={Footer}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
