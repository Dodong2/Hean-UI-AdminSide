import logo from "../images/g39.png";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginStyle from "./LoginForm.module.css";
import Load from './Loading';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://hean.mchaexpress.com/web-app/appcon/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Successful login, redirect or set authentication status
        console.log('Login successful');
      } else {
        // Handle error cases, e.g., show error message
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={LoginStyle["login-body"]}>
      <Load />
      <div className={LoginStyle["form-container"]}>
        <div className={LoginStyle["header-container"]}>
          <img src={logo} className={LoginStyle["logos"]} alt="Logo" />
          <div className={LoginStyle["pulse"]}></div>

          <div className={LoginStyle["text-form"]}>
            <h1>HEAN</h1>
            <p>Health Electronic Alert Network</p>
          </div>
        </div>
        <form >
          <h2>Username</h2>
          <input
            className={LoginStyle["fill"]}
            type="email"
            id="email"
            required=""
            placeholder="hello@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={LoginStyle["password-div"]}>
            <h2>Password</h2>
            <Link to="/OTPVerification">Forgot Password</Link>
          </div>
          <div className={LoginStyle["password-input"]}>
            <input
              className={LoginStyle["fill"]}
              type={showPassword ? "text" : "password"}
              id="password"
              required=""
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <IoEyeSharp
              className={LoginStyle["eye-icon"]}
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className={LoginStyle["checkbox"]}>
            <input type="checkbox" />
            Keep me sign in
          </div>
          <button className={LoginStyle["button-submit"]} type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p>
            Dont have an account? <Link to="/RegisterForm">Sign Up Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
