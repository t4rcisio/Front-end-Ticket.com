import { Routes, BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
