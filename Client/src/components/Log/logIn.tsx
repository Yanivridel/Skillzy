import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IFormDataLogIn } from "@/types/userTypes";
import { checkLogin } from "@/utils/userApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/userSlices";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<IFormDataLogIn>({
    email: "",
    password: "",
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    removeError();
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { user } = await checkLogin(formData);
    
      if (!user) {
          addError("Invalid email or password");
          return;
      }
      dispatch(setUser(user));
      navigate("/");
    } catch (err) {
        console.error("Login error: ", err);
        addError("Invalid email or password");
    } finally {
        setLoading(false);
        if(emailRef.current) emailRef.current.value = ""
        if(passwordRef.current) passwordRef.current.value = ""
        setFormData({
          email: "",
          password: "",
        });
    }
  };

  const removeError = () => setError("");
  const addError = (err: string) => {
      setError(err);

      if(emailRef.current) emailRef.current.classList.add("shake");
      if(passwordRef.current) passwordRef.current.classList.add("shake");
      setTimeout(() => {
        if(emailRef.current) emailRef.current.classList.remove("shake");
        if(passwordRef.current) passwordRef.current.classList.remove("shake");
      }, 500);
  }

  return (
    <div className="thin-font flex justify-center w-full flex-col h-[100%] m-auto">
      <div className="bg-[var(--container-bg)] md:max-w-[450px] mx-auto p-4 m-4 h-[100%] rounded-lg w-[60%] ">
        <h2 className="bubble-font text-center pb-3">Log In</h2>
        <form onSubmit={handleFormSubmit} className="space-y-2 ">
          <div>
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              ref={emailRef}
              style={{ borderColor: error ? "red" : "unset"}}
              id="email"
              name="email"
              type="email"
              autoComplete="username"
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
                style={{ borderColor: error ? "red" : "unset"}}
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
                autoComplete="new-password"
              />
              {/* Show Error */}
              {error && <div className="text-red-500 text-md text-center">{error}</div>}
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
