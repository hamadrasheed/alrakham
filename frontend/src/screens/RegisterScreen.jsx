import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";

const RegisterScreen = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      alert('Passwords not matched')
    } else {
      dispatch(register(name, email, phone, password));
    }
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Create Account</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="rePassword">Re-enter Password</label>
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              onChange={(e) => setRePassword(e.target.value)}
            />
          </li>
          <li>
            <button className="button primary" type="submit">
              Register
            </button>
          </li>
          <li>
            <div className="text-center ">Already have an account </div>
            <Link
              to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}
            >
              <div className="text-center ">Sign-In</div>
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default RegisterScreen;
