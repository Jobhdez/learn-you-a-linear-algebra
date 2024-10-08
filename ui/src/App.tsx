import React from "react";
import { Grid, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputExpression from "./components/InputExpression";
import MatrixExpression from "./components/MatrixExpression";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/matrix" element={<MatrixExpression />} />
        <Route path="/vector" element={<InputExpression />} />
      </Routes>
    </Router>
  );
}

export default App;
