import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./Login.module.css";
import google from "../../icons/google.svg";
import linkedin from "../../icons/linkedinwhite.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginDataType {
  email: string;
  password: string;
}
const Login = () => {
  const [loginData, setLoginData] = useState<LoginDataType>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userData") !== null) {
      navigate("/dashboard");
    }
  }, []);
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const logIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    axios
      .post("https://v2.base-borderless.com/api/v1/talents/auth", loginData)
      .then((res) => {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            name: res.data.data.name,
            title: res.data.data.title,
            email: res.data.data.email,
            avatar: res.data.data.avatar,
          })
        );
      })
      .then(() => navigate("/dashboard"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src="https://blog.borderlesshr.com/wp-content/themes/networker/img/logo.svg"
          alt=""
        />
      </div>
      <div className={styles.login}>
        <div className={styles.loginContent}>
          <h2>Log in</h2>
          <p>
            Don't have an Account? <a href="#">Register here</a>
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.googleBtn}>
              <img src={google} alt="" />
              <p>Using Google account</p>
            </button>
            <button className={styles.linkedinBtn}>
              <img src={linkedin} alt="" />
              <p>Using Linkedin</p>
            </button>
          </div>
          <p className={`${styles.orText} text`}>or</p>
          <div className={styles.loginFormContainer}>
            <p>Log in using email address</p>
            <form action="">
              <label htmlFor="">Email address</label>
              <input
                type="email"
                placeholder="Johndoe@gmail.com"
                value={loginData.email}
                name="email"
                onChange={(e) => changeValue(e)}
              />
              <label htmlFor="">Password</label>
              <a href="#" className={styles.forgotPasswordLink}>
                Forgot password?
              </a>
              <input
                type="password"
                placeholder="********"
                value={loginData.password}
                name="password"
                onChange={(e) => changeValue(e)}
              />
              <button
                type="submit"
                className={styles.btn}
                onClick={(e) => logIn(e)}
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
