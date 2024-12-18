import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IFormDataLogIn } from "@/types/userTypes";
import { checkLogin } from "@/utils/userApi";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msgText, setMsgText] = useState("");
  const [formData, setFormData] = useState<IFormDataLogIn>({
    email: "",
    password: "",
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Add shake effect on error
  const addShakeError = (ref: React.RefObject<HTMLInputElement>, message: string) => {
    setMsgText(message);
    if (ref.current) {
      ref.current.classList.add("shake");
      setTimeout(() => ref.current?.classList.remove("shake"), 500); // Remove shake after 500ms
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // Validate email and password
    if (!formData.email || !formData.password) {
      if (!formData.email) {
        addShakeError(emailRef, "Email is required.");
      } else {
        addShakeError(passwordRef, "Password is required.");
      }
      setLoading(false);
      return;
    }

    const data = await checkLogin(formData);
    console.log(data);

    if (data.status === 409) {
      addShakeError(emailRef, "Email or password is incorrect.");
      setLoading(false);
      return;
    }

    setLoading(false);
    setFormData({
      email: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <div className="thin-font flex justify-center w-full flex-col h-[100%] m-auto">
      <div className="bg-[var(--container-bg)] md:max-w-[450px] mx-auto p-4 m-4 h-[100%] rounded-lg w-[60%] ">
        <h2 className="bubble-font text-center pb-3">Log In</h2>
        <div className="text-red-500 text-center">{msgText}</div>
        <form onSubmit={handleFormSubmit} className="space-y-2 ">
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
                ref={passwordRef}
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
          <button
            type="submit"
            disabled={loading}
            className={`bg-[var(--button-bg)] w-full button-custom text-white py-2 rounded ${
              loading ? "bg-gray-500" : ""
            }`}
          >
            {loading ? "Loading..." : "Log In"}
          </button>
        </form>
      </div>
        <div className="text-center ">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-[var(--button-bg)]">
              Sign Up
            </Link>
          </p>
        </div>
    </div>
  );
};

export default LogIn;
