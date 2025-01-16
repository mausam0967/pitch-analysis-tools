import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/toaster';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
      <Toaster />
    </AuthProvider>
  );
}

export default App;
