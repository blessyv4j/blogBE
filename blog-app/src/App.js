import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./Blog";
import Bollywood from "./Blog/Bollywood";
import Tech from "./Blog/Tech";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Blog />} />
          <Route path="/bwd" exact element={<Bollywood />} />
          <Route path="/tech" exact element={<Tech />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
