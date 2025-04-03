import "./App.css";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/routing/ProtectedRoute";
// import PersonalInfoForm from "./components/forms/PersonalInfoForm";
import PersonalInfoForm from "./components/forms/index";
import Layout from "./components/layouts/Layout";
// import UpdatePersonalDetails from "./components/dashboard/practise/UpdatePersonalDetails";
// import UpdateEducationDetails from "./components/dashboard/practise/UpdateEducationDetails";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          {/* <Route path="/update" element={<UpdatePersonalDetails />} /> */}
          {/* <Route path="/education" element={<UpdateEducationDetails />} /> */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/profile-form" element={<PersonalInfoForm />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
