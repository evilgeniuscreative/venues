import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import Listing from '../components/Listings/Listing';

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/listing/:id' element={<Listing />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default Routers;
