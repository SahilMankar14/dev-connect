import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { loading, error } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.prevantDefault();
    console.log(formData);
    console.log("Form Submitted");
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-80 bg-blue-50 rounded-lg p-4">
        <h4 className="text-center text-xl font-bold">Sign Up</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label className="mb-2 text-sm font-bold">Name</label>
          <input
            className="w-full rounded-lg border-2 border-gray-300 p-2"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label className="mb-2 text-sm font-bold">Email</label>
          <input
            className="w-full rounded-lg border-2 border-gray-300 p-2"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label className="mb-2 text-sm font-bold">Password</label>
          <input
            className="w-full rounded-lg border-2 border-gray-300 p-2 mb-2"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label className="mb-2 text-sm font-bold">Phone Number</label>
          <input
            className="w-full rounded-lg border-2 border-gray-300 p-2 mb-2"
            id="phoneno"
            type="text"
            name="phoneno"
            value={formData.phoneno}
            onChange={handleChange}
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            {loading ? "Signing up..." : "Sign up"}
          </button>
          {error && <div className="text-red-500 text-sm">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
