import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdatePage from "./pages/Update";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Admin routes must be admin only */}
          <Route path="/admin/dashboard" element={
            <ProtectedRoute role="Admin"><AdminDashboard /></ProtectedRoute>
          } />
          {/* Customer routes must be customer only */}
          <Route path="/customers/dashboard" element={
            <ProtectedRoute role="Customer"><CustomerDashboard /></ProtectedRoute>
          } />
          {/* Update page for Admin Only */}
          <Route path="/admin/restaurants/update" element={
            <ProtectedRoute role="Admin"><UpdatePage /></ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;