import React, { useState } from "react";
import Base from "../core/Base";
import {signup} from "../auth/helper/index"
import { Link } from "react-router-dom";


const Signup = () => {

  const [values, setValues] = useState({
    name:"",
    email:"",
    mobile:"",
    password:"",
    semester:0,
    success:false,
    error:false,
    errMsg:"",
    loading:false
  })

  const {name, email, mobile, password, success, error, loading, semester} = values;

  const handleChange = name => event => {
    setValues({
      ...values,
      error:false,
      [name]:event.target.value
    });
  }

  const onSubmit = event => {
    event.preventDefault();
    setValues({
      ...values,
      error:false,
      loading: true,
    })
    signup({ name, semester, email, mobile, password })
      .then((data) => {
        if(data.email == email){
          setValues({
            ...values,
            error:false,
            loading:false,
            success:true,
            name:"",
            email:"",
            password:"",
            mobile:"",
            semester:0
          })
        }else{
          setValues({
            ...values,
            error:true,
            success:false,
            loading:false
          })
        }
      })
      .catch((err) => console.log(err));
  }

  const showSuccessMessage = () => {
    return(
      <div className="row">
        <div className="col-md-6 offset-3 text-left">
          <div
            className="alert alert-success"
            style={{display: success? "" : "none"}}
          >
            New Account created successfully.
            <Link to='/signin'>Signin now.</Link>
          </div>
        </div>
      </div>
    )
  }

  const showErrorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            Unable to create new account !! Try again..
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
    <Base
      title="Register Now"
      description="Start Learning ..."
    >
      {showSuccessMessage()}
      {showErrorMessage()}
      {showLoadingMessage()}
      <div className="row">
        <div className="col-6 offset-3">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                onChange={handleChange("name")}
              />
            </div>
            <div className="form-group">
              <label>Semester</label>
              <input
                type="number"
                className="form-control"
                placeholder="1 to 6"
                onChange={handleChange("semester")}
              />
            </div>
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
              <label>Mobile</label>
              <input
                type="text"
                className="form-control"
                placeholder="9876543210"
                onChange={handleChange("mobile")}
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
          </form>
        </div>
      </div>
    </Base>
  );
};

export default Signup;
