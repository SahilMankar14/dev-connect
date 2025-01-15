import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn(email, password);
    if (!loading && !error) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="p-4 w-80 bg-slate-200 rounded-lg ">
        <h4 className="text-xl font-bold text-center mb-4">Login</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-bold">Email</label>
          <input
            className="w-full rounded-lg border-2 border-gray-300 p-2"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <label className="mb-2 text-sm font-bold">Password</label>
          <input
            className="w-full rounded-lg border-2 border-gray-300 p-2 mb-2"
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            type="submit"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
