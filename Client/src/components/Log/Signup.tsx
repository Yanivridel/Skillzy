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
  const [ phoneEmailError , setPhoneEmailError ] = useState("");
  const [ passwordError , setPasswordError ] = useState("");
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
    removePasswordError();
    removePhoneEmailError();
  };

  const handleRoleSelect = (role: string) => {
    setFormData({
      ...formData,
      role: role,
    });
    removePasswordError();
    removePhoneEmailError();
  };

  const removePasswordError = () => setPasswordError("");
  const removePhoneEmailError = () => setPhoneEmailError("");

  const addError = (errorType: string, message: string, refs: React.RefObject<HTMLInputElement>[] = []) => {
    if (errorType === 'email') setPhoneEmailError(message);
    else if (errorType === 'password') setPasswordError(message);
  
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current.classList.add('shake');
        setTimeout(() => {
          ref.current?.classList.remove('shake');
        }, 500);
      }
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    // Validate passwords match
    if (confirmPassword !== formData.password) {
      addError("password", "The Passwords Do Not Match", [passwordRef, confirmPasswordRef]);
      setLoading(false); // Stop loading after validation failure
      return;
    }
  
    // Validate phone number
    if (formData.phone.length !== 10) {
      addError("email", "Phone number must be exactly 10 digits.", [phoneRef]);
      setLoading(false); // Stop loading after validation failure
      return;
    }
  
    try {
      await createUser(formData);
      navigate("/login");
      alert("Account Added Successfully")
    } catch (err) {
      console.error("Login error: ", err);
      addError("email", "Email or Phone Already Taken", [emailRef, phoneRef]);
    } finally {
      setLoading(false);
      setConfirmPassword("");
      setFormData({
        fName: "",
        lName: "",
        phone: "",
        email: "",
        password: "",
        role: "student",
      });
  
    }
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
                maxLength={10}
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
                maxLength={10}
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
                style={{ borderColor: phoneEmailError ? "red" : "unset"}}
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
                style={{ borderColor: phoneEmailError ? "red" : "unset"}}
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
          {phoneEmailError && <div className="text-red-500 text-md text-center">{phoneEmailError}</div>}
          <div>
            <label htmlFor="password" className="block">
              Password
            </label>
            <div className="relative">
              <input
                ref={passwordRef}
                style={{ borderColor: passwordError ? "red" : "unset"}}
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
            <div className="relative">
              <input
                ref={confirmPasswordRef}
                style={{ borderColor: passwordError ? "red" : "unset"}}
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => { setConfirmPassword(e.target.value); removePasswordError()}}
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
          {passwordError && <div className="text-red-500 text-md text-center">{passwordError}</div>}
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
