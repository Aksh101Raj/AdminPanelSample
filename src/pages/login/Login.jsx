import "./login.scss";
import React, { useEffect, useState } from "react";
// import useInput from "../../Hook/use-input";
import { Link, useNavigate } from "react-router-dom";
// import { signInWithnameAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";
// import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");

  const username = "admin";
  const pass = "admin@123";

  const navigate = useNavigate();

  useEffect(() => {
    console.log("test");
    // localStorage.removeItem("user");
  }, []);

  // const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (name === username && password === pass) {
      // dispatch({ type: "LOGIN", payload: username });
      localStorage.setItem("user", name);
      navigate("/");
    } else {
      setError(true);
    }
    // signInWithnameAndPassword(auth, name, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     dispatch({ type: "LOGIN", payload: user });
    //     navitage("/");
    //   })
    //   .catch((error) => {
    //     setError(true);
    //   });
  };

  return (
    <div className="back">
      <div className="Form">
        <h2 className="welcome">Welcome!</h2>
        <form
          className="frm row g-3"
          style={{ margin: "10px" }}
          onSubmit={handleLogin}
        >
          <div className="panel">
            <div className={"p1 "}>
              <label htmlFor="name" className="form-label">
                User Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter Your name"
                onChange={(e) => setname(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
          {error && <span>Wrong name or password!</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
