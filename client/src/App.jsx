import React from "react";
import {Routes, Route} from 'react-router-dom';

import MakeRequest from "./pages/MakeRequest";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/make-request' element={<MakeRequest />} />
      </Routes>
    </div>
  );
};

export default App;
