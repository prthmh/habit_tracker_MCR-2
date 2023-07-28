import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Archive from "./pages/Archive/Archive";
import SingleHabit from "./pages/SingleHabit/SingleHabit";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/habit/:habitId" element={<SingleHabit />} />
      </Routes>
    </div>
  );
};

export default App;
