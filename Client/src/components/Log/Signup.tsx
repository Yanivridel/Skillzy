import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IFormData } from "@/types/userTypes";
import { log } from "console";
import { createUser } from "@/utils/userApi";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<IFormData>({
    fName: "",
    lName: "",
    phone: "",
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleRoleSelect = (role: string) => {
    setFormData({
      ...formData,
      role: role,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser(formData)
    setLoading(false);
    setFormData({
      fName: "",
      lName: "",
      phone: "",
      email: "",
      password: "",
      role: "",
    });
    // console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold text-center">Sign Up</h2>
      <form onSubmit={(e) => handleFormSubmit(e)} className="space-y-4">
        <div>
          <label htmlFor="fName" className="block">
            First Name
          </label>
          <input
            id="fName"
            name="fName"
            type="fName"
            value={formData.fName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="lName" className="block ">
            Last Name
          </label>
          <input
            id="lName"
            name="lName"
            type="text"
            value={formData.lName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleRoleSelect("student")}
            className={`px-6 py-2 rounded-lg ${
              formData.role === "student"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Student
          </button>

          <button
            onClick={() => handleRoleSelect("teacher")}
            className={`px-6 py-2 rounded-lg ${
              formData.role === "teacher"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Teacher
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 text-white py-2 rounded ${
            loading ? "bg-gray-500" : ""
          }`}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>

      <div className="text-center mt-4">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
