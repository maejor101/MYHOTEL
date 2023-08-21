import React from "react";
import './index.css';
import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound";
import Create from "./components/Create";
import Kard from "./components/Kard";
import Ddetails from "./components/Ddetails";

function App() {
  return (
    <div>

     <Routes>
      <Route path="/create" element={<Create />} />
      <Route path="/hotels/:id" element={<Ddetails />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Kard />} />
     </Routes>
         
    </div>
  );
}

export default App;
