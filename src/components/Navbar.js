import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flat-header-wrap style2">
        <div className="top style3 background-trans padding-none">
        {/* <div className="top style3  padding-none"> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="wrap-top margin-top9 clearfix">
                  <ul className="flat-information style2">
                    <li>
                      <i className="fa fa-map-marker" />
                      <a href="#">A2B/49A, Paschim Vihar, Delhi</a>
                    </li>
                    <li>
                      <i className="fa fa-envelope" />
                      <a href="#">info@arsps.net</a>
                    </li>
                    <li>
                      <i className="fa fa-phone" />
                      <a href="#">011-47019779</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.col-lg-7 */}
              <div className="col-lg-5">
                <div className="wrap-top reponsive-none clearfix">
                  {/* <ul className="menu menu-extra">
                    <li id="s" className="show-search">
                      <a href="#search" className="flat-search">
                        <i className="fa fa-search" />
                      </a>
                    </li>
                    
                  </ul> */}
                  <ul className="social-links color-white float-right margin-left25 margin-top14">
                    <li>
                      <a href="https://www.facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/ars_consultancy/">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/arsconsultancy2015/">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/ars-process-solution-and-consultancy/">
                        <i className="fa fa-linkedin " />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.col-lg-5 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.top */}
        {/* Header */}
        <header id="header" className="header header-style3 header-classic">
          <div className="container">
            <div className="background-white">
            {/* <div className="background-white"> */}
              <div className="row">
                <div className="col-lg-3">
                  <div id="logo" className="logo">
                    <a href="/" rel="home">
                      <img src="images/ars_logo.jpg" alt="image" />
                    </a>
                  </div>
                  {/* /.logo */}
                </div>
                <div className="col-lg-9">
                  <div className="flat-wrap-header">
                    <div className="nav-wrap clearfix">
                      <nav
                        id="mainnav"
                        className="mainnav style2 color-93a float-left"
                      >
                        <ul className="menu">
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="/about-us">About Us</a>
                          </li>
                          <li>
                            <a href="/services">Services</a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                        </ul>
                        {/* /.menu */}
                      </nav>
                      {/* /.mainnav */}
                      <aside className="widget float-right">
                        <div className="btn-click style2">
                          <a href="#" className="flat-button">
                            GET A QUOTE
                          </a>
                        </div>
                      </aside>
                    </div>
                    {/* /.nav-wrap */}
                    <div className="btn-menu">
                      <span />
                    </div>
                    {/* //mobile menu button */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
