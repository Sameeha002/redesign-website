import React, { useState } from "react";
import "./Signup.css"
import logo from "../../Assets/logo.png";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Context/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "* Email  is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "* Enter a valid email";
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password) {
      newErrors.password = "* Password is required";
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "* Password must be at least 8 characters long and include at least one letter and one number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const loginData = {
      name: name,
      email: email,
      password: password,
    };
    console.log(loginData);

    try{
       const userCredential=  await createUserWithEmailAndPassword(auth, email, password)
       const user =userCredential.user;
       console.log(user);

       if (user) {
        await setDoc(doc(db, "Users" , user.uid), {
            email: user.email,
            name: name
        })
       }
       console.log("User is registered successfully");
       toast.success("User is registered successfully!!", {position: "top-center"})
    }
    catch (error) {
        console.log(error.message)
        toast.success(error.message, {position: "bottom-center"})
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="login-container">
      {/* {validateForm && <Navigate to={"/"} replace={true} />} */}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-logo">
          <img src={logo} alt="" />
        </div>
        <div className="login-form-content">
          <div className="name">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value.trim())
              }
            />
          </div>
          <div className="login-email">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value.trim())
              }
              id="login-email"
            />
            <button>
              <MdEmail className="email-icon" />
            </button>
            {errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>
          <div className="login-password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value.trim())
              }
              id="login-password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <IoMdEye className="eye" />
              ) : (
                <IoMdEyeOff className="eye-off" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>
        <div className="login-remember">
          <div>
            <input type="checkbox" id="rememberMe" />
            <label
              
              className="remember-text"
            >
              {" "}
              Remember Me
            </label>
          </div>
          <div>
            <button className="sign-in">Sign Up</button>
          </div>
        </div>
        <div className="login-here">
          <Link to="/login">
            <p>Already have an account? Login here</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
