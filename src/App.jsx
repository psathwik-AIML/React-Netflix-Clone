import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Player from "./Pages/Player/Player";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
