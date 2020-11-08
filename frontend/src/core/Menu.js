import React, { Fragment } from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth/helper'


const currentTab = (history, path) => {
    if (history.location.pathname === path){
        return { color: "rgb(232, 235, 51)" };
    }
    else{
        return {color: "#FFFFFF"}
    }
}

const Menu = ({history, path}) => {
    return (
      <div className="bg-custom my-2 mx-3">
        <ul className="nav nav-tabs">
          {!isAuthenticated() && (
            <li className="nav-item">
              <Link
                style={currentTab(history, "/")}
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>
          )}
          {isAuthenticated() && (
            <li className="nav-item">
              <Link
                style={currentTab(history, "/")}
                className="nav-link"
                to="/subject-list"
              >
                Subject List
              </Link>
            </li>
          )}
          {!isAuthenticated() && (
            <Fragment>
              <li className="nav-item">
                <Link
                  style={currentTab(history, "/signup")}
                  className="nav-link"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={currentTab(history, "/signin")}
                  className="nav-link"
                  to="/signin"
                >
                  Signin
                </Link>
              </li>
            </Fragment>
          )}
          {isAuthenticated() && (
            <li className="nav-item">
              <span
                className="text-warning nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  signout(() => history.push("/"));
                }}
              >
                Signout
              </span>
            </li>
          )}
        </ul>
      </div>
    );
}

export default withRouter(Menu);
