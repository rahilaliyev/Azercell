import React from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { logInOut } from "../../redux/actions/action";

const Login = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logInOut(false));
  };
  const login = () => {
    dispatch(logInOut(true));
  };
  return (
    <div className="login container">
      <form>
        <div className="form-input">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="form-input">
          <label>Password</label>
          <input type="password" />
        </div>
        <button type="submit" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
