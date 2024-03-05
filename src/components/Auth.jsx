import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { GoEyeClosed } from "react-icons/go";
import signInImage from "../assets/signInImage.jpg";

const initialState = {
  fullName: "",
  userName: "",
  phoneNumber: "",
  avatarUrl: "",
  password: "",
  confirmPassword: "",
};

const cookies = new Cookies();

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState(initialState);
  const [password, setPassword] = useState(true);
  const [showPassword, setShowPassword] = useState();

  const toggglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log("Hello");
  };
  const switchMode = () => {
    setIsSignUp(!isSignUp);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, userName, password, phoneNumber, avatarUrl } = form;
    const URL = "http://localhost:5000/auth";
    const {
      data: { token, userId, hashedPassword },
    } = await axios.post(`${URL}/${isSignUp ? "signup" : "login"}`, {
      userName,
      password,
      fullName,
      phoneNumber,
      avatarUrl,
    });
    // console.log(response)

    cookies.set("token", token);
    cookies.set("userName", userName), cookies.set("userId", userId);
    if (isSignUp) {
      cookies.set("fullName", fullName),
        cookies.set("phoneNumber", phoneNumber),
        cookies.set("avatarUrl", avatarUrl);
    }
    window.location.reload();
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignUp ? "SignUp" : "SignIn"}</p>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                ></input>
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                onChange={handleChange}
                required
              ></input>
            </div>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                ></input>
              </div>
            )}
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarUrl">Avatar Url</label>
                <input
                  type="text"
                  name="avatarUrl"
                  placeholder="Avatar Url"
                  onChange={handleChange}
                  required
                ></input>
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">
                Password
                <button onClick={toggglePasswordVisibility}>
                  {showPassword ? <RxEyeOpen /> : <GoEyeClosed />}
                </button>
              </label>
              <input
                type={setShowPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              ></input>
            </div>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="text"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                ></input>
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignUp ? "SignUp" : "SignIn"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-content_account">
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </p>
            <span onClick={switchMode}>{isSignUp ? "Sign In" : "Sign Up"}</span>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signInImage} alt="sign in"></img>
      </div>
    </div>
  );
};

export default Auth;
