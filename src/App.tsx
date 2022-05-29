import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./screens/home/home";
import Moves from "./screens/moves/moves";
import Layout from "./components/Layout";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/beginners" element={<Moves />} />
          <Route path="/sf" element={<Moves />} />
          <Route path="/bronze" element={<Moves />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
