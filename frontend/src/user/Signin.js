import React, { useState } from "react";
import Base from "../core/Base";
import { signin, authenticate, isAuthenticated } from "../auth/helper/index";
import { Link, Redirect } from "react-router-dom";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    success: false,
    error: false,
    errMsg: "",
    loading: false,
    didRedirect:false
  });

  const { name, email, mobile, password, success, error, errMsg, loading, didRedirect } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      [name]: event.target.value,
    });
  };

  const perfomRedirect = () => {
    if (didRedirect && isAuthenticated()) {
      return <Redirect to="/subject-list" />;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      error: false,
      loading: true,
      errMsg:""
    });
    signin({email, password})
    .then(data => {
        console.log(data)
        if(data.token){
            authenticate(data, ()=>{
                console.log("Successfully signed in!!!");
                setValues({
                  ...values,
                  email:"",
                  password:"",
                  didRedirect:true,
                  success:true,
                })
            })
        }else{
            setValues({
              ...values,
              success: false,
              loading: false,
              error: true,
              didRedirect: false,
              errMsg: data.error ? data.error : "Unable to login !!",
            });
        }
    })
    .catch(err => console.log(err));
     
  }

  const showErrorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {errMsg}
          </div>
        </div>
      </div>
    );
  };

  const showLoadingMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-3">
          <div
            className="alert alert-info"
            style={{ display: loading ? "" : "none" }}
          >
            <div className="row">
              <div className="col-md-6 text-left">Loading ....</div>
              <div className="col-md-6 text-right">
                <img
                  src="https://i.imgur.com/GLdqYB2.gif"
                  width="25px"
                  height="25px"
                  alt="Loading ..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="WELCOME BACK" description="Sign in to continue ..">
      {showErrorMessage()}
      {showLoadingMessage()}
      <div className="row">
        <div className="col-6 offset-3">
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="abc@example.com"
                onChange={handleChange("email")}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                onChange={handleChange("password")}
              />
            </div>
            <button
              className="btn btn-primary btn-block"
              onClick={onSubmit}
              disabled={loading}
              style={{ cursor: loading ? "not-allowed" : "default" }}
            >
              Submit
            </button>
            <div className="text-center mb-2">
              <span><Link>Forgot password ?</Link></span>
            </div>
            {perfomRedirect()}
          </form>
        </div>
      </div>
    </Base>
  );
};

export default Signin;
