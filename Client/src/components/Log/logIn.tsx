import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IFormDataLogIn } from "@/types/userTypes";
import { checkLogin} from "@/utils/userApi";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msgText, setMsgText] = useState("");
  const [formData, setFormData] = useState<IFormDataLogIn>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    const data = await checkLogin(formData)
    console.log(data);
     

    if (data.status === 409) {
        setMsgText("email or phone already exists")
        return;
    }
    setLoading(false);
    setFormData({
      email: "",
      password: "",
    });
    navigate("/")
    // console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold text-center">Log In</h2>
      <div>{msgText}</div>
      <form onSubmit={(e) => handleFormSubmit(e)} className="space-y-4">
      
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


    </div>
  );
};

export default LogIn;

