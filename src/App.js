import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useSmoothScroll } from "./hooks/useSmoothScroll"
const App = () => {
  useSmoothScroll()
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </div>
  );
};

export default App;
