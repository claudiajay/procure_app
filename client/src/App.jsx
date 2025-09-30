import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import MakeRequest from "./pages/MakeRequest";
import CreateRequest from "./pages/CreateRequest"; 
import RequestDetails from "./pages/RequestDetails";
import PrivateRoute from "./components/PrivateRoute";
import Order from "./pages/Order";
import RoleRoute from "./components/RoleRoute";

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
              <CreateRequest />
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

        <Route
          path="/requests/:id"
          element={
            <PrivateRoute>
              <RequestDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <RoleRoute allowedRoles={["Manager"]}>
                <Order />
              </RoleRoute>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
