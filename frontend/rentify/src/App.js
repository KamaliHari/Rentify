import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap-icons.css';
import './css/slick.css';
import './css/tooplate-little-fashion.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Buyer from './buyer/Buyer';
import Seller from './Seller';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route
          path="/sign-up"
          element={
            <Signup />
          }
        />
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        <Route
          path="/buyer"
          element={
            <Buyer></Buyer>
          }
        />
         <Route
          path="/seller"
          element={
            <Seller></Seller>
          }
        />
       
       
       
         </Routes>
    </BrowserRouter>
  )
}

export default App