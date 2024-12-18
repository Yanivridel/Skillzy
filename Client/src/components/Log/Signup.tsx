import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IFormDataSingUp } from "@/types/userTypes";
import { createUser } from "@/utils/userApi";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msgText, setMsgText] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState<IFormDataSingUp>({
    fName: "",
    lName: "",
    phone: "",
    email: "",
    password: "",
    role: "student",
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
    if (confirmPassword !== formData.password){
        setMsgText("The passwords you entered do not match. Please try again.")
        return;
      }
    const data = await createUser(formData)
    console.log(data);
     

    if (data.status === 409) {
        setMsgText("email or phone already exists")
        return;
    }
    setLoading(false);
    setFormData({
      fName: "",
      lName: "",
      phone: "",
      email: "",
      password: "",
      role: "",
    });
    navigate("/")
    // console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold text-center">Sign Up</h2>
      <div>{msgText}</div>
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
            className="w-full px-4 py-2 border rounded"
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
            maxLength={10} 
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
              {!showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block">
          Confirm Password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3"
            >
              {!showConfirmPassword ? <FiEyeOff /> : <FiEye />}
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
