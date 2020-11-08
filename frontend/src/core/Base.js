import React, { Children } from 'react'
import Menu from './Menu';

const Base = ({
    title = "My Title",
    description = "My Description",
    className = "p-4",
    children
}) => {
    return (
      <div>
        <Menu />
        <div className="container-fluid">
          <div className="jumbotron bg-custom text-center">
            <h2 className="heading-text">{title}</h2>
            <p className="description-text">{description}</p>
          </div>
          <div className={className}>{children}</div>
          <footer
            className="footer bg-custom text-yellow py-1 text-center"
            style={{ bottom: 0 }}
          >
            <h6 className="">
              <i className="fa fa-copyright" aria-hidden="true"></i>All Rights
              CopyRight 2020. All rights are reserved.
            </h6>
            <div className="text-center text-white">
              <h5>Contact Us</h5>
              <span>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                &nbsp; vslprojects1920@gmail.com
              </span>
            </div>
          </footer>
        </div>
      </div>
    );
}

export default Base;