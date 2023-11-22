import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/Home";

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default Routers;
