import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap-icons.css';
import './css/slick.css';
import './css/tooplate-little-fashion.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';


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
         </Routes>
    </BrowserRouter>
  )
}

export default App