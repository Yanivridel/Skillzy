import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IFormDataSingUp } from "@/types/userTypes";
import { createUser } from "@/utils/userApi"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

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
  const dispatch = useDispatch();
  const userLogged = useSelector((state: RootState) => state.userLogged);

  // Refs for inputs
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

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

  // Add error and apply shake effect
  const addShakeError = (ref: React.RefObject<HTMLInputElement>, message: string) => {
    setMsgText(message);
    if (ref.current) {
      ref.current.classList.add("shake");
      setTimeout(() => ref.current?.classList.remove("shake"), 500); // Remove shake after 500ms
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous error messages
    setMsgText("");

    // Validate passwords match
    if (confirmPassword !== formData.password) {
      addShakeError(confirmPasswordRef, "The passwords you entered do not match. Please try again.");
      return;
    }

    // Validate phone number
    if (formData.phone.length !== 10) {
      addShakeError(phoneRef, "Phone number must be exactly 10 digits.");
      return;
    }

    // API call
    setLoading(true);
    const data = await createUser(formData);
    console.log(data);
    if (data.status === 409) {
      console.log("status 409")
      addShakeError(emailRef, "Email or phone already exists.");
      setLoading(false);
      return;
    }

    // Reset form on success
    setLoading(false);
    setFormData({
      fName: "",
      lName: "",
      phone: "",
      email: "",
      password: "",
      role: "student",
    });
    navigate("/");
  };

  return (
    <div className="thin-font flex justify-center flex-col h-[100%] m-auto w-[80%]">
      <div className="bg-[var(--container-bg)] max-w-md mx-auto p-4 m-4 h-[100%] rounded-lg">
        <h2 className="bubble-font text-center pb-3">Sign Up</h2>
        <form onSubmit={handleFormSubmit} className="space-y-2">
          <div className="md:flex gap-4">
            <div>
              <label htmlFor="fName" className="block">
                First Name
              </label>
              <input
                id="fName"
                name="fName"
                type="text"
                value={formData.fName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded text-[var(--input-text)]"
                required
              />
            </div>
            <div>
              <label htmlFor="lName" className="block">
                Last Name
              </label>
              <input
                id="lName"
                name="lName"
                type="text"
                value={formData.lName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded text-[var(--input-text)]"
                required
              />
            </div>
          </div>
          <div className="md:flex gap-4">
            <div>
              <label htmlFor="phone" className="block">
                Phone Number
              </label>
              <input
                ref={phoneRef}
                id="phone"
                name="phone"
                type="text"
                maxLength={10}
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    handleChange(e);
                  }
                }}
                className="w-full px-4 py-2 border rounded text-[var(--input-text)]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                ref={emailRef}
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded text-[var(--input-text)]"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block">
              Password
            </label>
            <div className="relative">
              <input
                ref={passwordRef}
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded text-[var(--input-text)]"
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
            <div className="relative pb-4">
              <input
                ref={confirmPasswordRef}
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded text-[var(--input-text)]"
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
              type="button"
              className={`px-6 py-2 rounded-lg ${
                formData.role === "student"
                  ? "bg-[var(--button-bg)] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Student
            </button>
            <button
              onClick={() => handleRoleSelect("teacher")}
              type="button"
              className={`px-6 py-2 rounded-lg ${
                formData.role === "teacher"
                  ? "bg-[var(--button-bg)] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              Teacher
            </button>
          </div>
          <p className="text-red-500">{msgText}</p>
          <button
            type="submit"
            disabled={loading}
            className={`bg-[var(--button-bg)] w-full button-custom text-white py-2 rounded ${
              loading ? "bg-gray-500" : ""
            }`}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
      <div className="text-center">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-[var(--button-bg)]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
