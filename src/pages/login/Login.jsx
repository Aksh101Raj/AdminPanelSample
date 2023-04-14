import "./login.scss";
import React from "react";
// import useInput from "../../Hook/use-input";
import { Link } from "react-router-dom";

const Login = () => {
  // const submitForm = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="back">
      <div className="Form">
        <h2 className="welcome">Welcome!</h2>
        <form className="frm row g-3" style={{ margin: "10px" }}>
          <div className="panel">
            <div className={"p1 "}>
              <label htmlFor="name" className="form-label">
                User Name
              </label>
              <input
                type="text"
                name="uname"
                id="name"
                className="form-control"
                placeholder="Enter Your User Name"
                required
              />
            </div>

            <div className={"p2"}>
              <label htmlFor="inputAddress2" className="form-labell">
                Password
              </label>
              <input
                type="password"
                name="pass"
                className="form-control"
                id="password"
                placeholder="Enter Your Password"
                required
              />
            </div>
          </div>

          <div className="button col-12">
            <button type="submit" className="btn btn-success m-3">
              Log In
            </button>
            <Link to="/">
              <button type="submit" className="btn btn-danger m-3">
                Cancle
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
