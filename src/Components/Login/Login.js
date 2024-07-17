import React from "react";
import signInImage from "../../Images//Cap.PNG";
import useLogin from "./useLogin";
import SocialLinks from "../SocialLinks";
import "./login.css";
import { Link } from "react-router-dom";



const Login = () => {
  const { formik } = useLogin();
  return (
    <form onSubmit={formik.handleSubmit}>
    <div className="signup-container">
      <section className="left-container">
        <h3>Sign In</h3>
        <div className="action-buttons">
          <Link to="">New user?</Link>
          <Link to="" className="new">
            Create an account
          </Link>
        </div>
        <div className="input-component-main">
          <input
            placeholder="Username or Email"
            className="input-component"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email ? (
            <span className="error">{formik.errors.email}</span>
          ) : null}

          <input
            placeholder="Password"
            className="input-component"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          {formik.errors.password && formik.touched.password ? (
            <span className="error">{formik.errors.password}</span>
          ) : null}
        </div>
        <div className="c-check">
          <input type="checkbox" className="check-input" />
          <label className="label-text">Keep me signed in</label>
        </div>
        <div className="bottom-btn">
          <button className="b-button" type="submit">
            Sign In
          </button>
        </div>
        <div className="bottom">
          <hr />
          <span className="alternative-text">or sign in with</span>
        </div>

        <SocialLinks />
      </section>
      <section className="right-sec">
        <img src={signInImage} alt="" />
      </section>
    </div>
  </form>
  );
};

export default Login;
