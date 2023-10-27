import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Footer from "./components/Footer/Footer";

function App() {

  const [count, setCount] = useState(1);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" Component={WelcomePage}></Route> */}
          <Route path="/Page1" Component={Page1}></Route>
          <Route path="/Page2" Component={Page2}></Route>
          <Route path="/Footer" Component={Footer}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
