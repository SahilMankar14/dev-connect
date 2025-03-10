import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [signUpResponse, setSignUpResponse] = useState(null);

  const logIn = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );
      const token = response.data.token;
      console.log("response:", response.data.user.id);
      localStorage.setItem("token", token);
      setUser(response.data.user);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const signUp = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      setSignUpResponse(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Add useEffect for token verification on load
  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          // Add token verification API call here
          setUser(/* verified user data */);
        } catch (err) {
          localStorage.removeItem("token");
          setError("Session expired");
        }
      }
      setLoading(false);
    };

    verifyToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        error,
        logIn,
        logOut,
        signUp,
        signUpResponse,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
