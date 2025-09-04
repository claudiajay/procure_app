import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './components/Dashboard/Dashboard';
import MakeRequest from './pages/MakeRequest';
import RequestList from './pages/RequestList'; // Import the Request List page
import RequestDetails from './pages/RequestDetails';  
import PrivateRoute from "../components/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
            <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/new-request"
        element={
          <PrivateRoute>
            <RequestList />
          </PrivateRoute>
        }
      />

      <Route
        path="/my-requests"
        element={
          <PrivateRoute>
            <MakeRequest />
          </PrivateRoute>
        }
      />

      <Route path="/requests/:id" element={
          <PrivateRoute>
            <RequestDetails />
          </PrivateRoute>
        }
      />
        </Routes>
    </div>
    
  );
}

export default App;
