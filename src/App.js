import React from "react";
import { Routes, Route } from "react-router-dom";
import Problems from "./components/Problems";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFoundPage from "./components/NotFoundPage";
import Prevention from "./components/Prevention";

import { useSmoothScroll } from "./hooks/useSmoothScroll"
const App = () => {
  useSmoothScroll()
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/problems" element={<Problems/>}/>
        <Route path="/prevention" element={<Prevention/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
