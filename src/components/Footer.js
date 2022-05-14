import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer widget-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 reponsive-mb30">
              <div className="widget-logo">
                <div id="logo-footer" className="logo">
                  <a href="/" rel="home">
                    <img src="images/logo.png" alt="image"/>
                  </a>
                </div>
                {/* <p>Solving Corporate challenges - Absolutely</p> */}
                {/* <ul className="flat-information">
                  <li>
                    <i className="fa fa-map-marker" />
                    <a href="#">A2B/49A, Paschim Vihar, Delhi</a>
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <a href="#">011-47019779</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <a href="#">info@arsps.net</a>
                  </li>
                </ul> */}
              </div>
            </div>
            {/* /.col-md-3 */}
            <div className="col-lg-3 col-sm-6 reponsive-mb30">
              
            </div>
            <div className="col-lg-3 col-sm-6 reponsive-mb30">
              <div className="widget widget-out-link clearfix">
                <h5 className="widget-title">Our Links</h5>
                <ul className="one-half">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="about-us">About Us</a>
                  </li>
                  <li>
                    <a href="services">Services</a>
                  </li>
                  <li>
                    <a href="contact">Contact</a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
            {/* /.col-md-3 */}
            {/* <div className="col-lg-3 col-sm-6 reponsive-mb30">
              <div className="widget widget-recent-new">
                <h5 className="widget-title">Recent News</h5>
                <ul className="popular-new">
                  <li>
                    <div className="text">
                      <h6>
                        <a href="#">Colombia Gets a Business Makeover</a>
                      </h6>
                      <span>20 Aug 2017</span>
                    </div>
                  </li>
                  <li>
                    <div className="text">
                      <h6>
                        <a href="#">
                          Counting the Cost of Delay &amp; Disruption
                        </a>
                      </h6>
                      <span>20 Aug 2017</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* /.col-md-3 */}
            {/* <div className="col-lg-3 col-sm-6 reponsive-mb30">
              <div className="widget widget-letter">
                <h5 className="widget-title">Newsletter</h5>
                <p className="info-text">
                  Subscribe our newsletter gor get noti-fication about new
                  updates, etc.
                </p>
                <form
                  id="subscribe-form"
                  className="flat-mailchimp"
                  method="post"
                  action="#"
                  data-mailchimp="true"
                >
                  <div className="field clearfix" id="subscribe-content">
                    <p className="wrap-input-email">
                      <input
                        type="text"
                        tabIndex={2}
                        id="subscribe-email"
                        name="subscribe-email"
                        placeholder="Enter Your Email"
                      />
                    </p>
                    <p className="wrap-btn">
                      <button
                        type="button"
                        id="subscribe-button"
                        className="flat-button subscribe-submit"
                        title="Subscribe now"
                      >
                        SUBSCRIBE
                      </button>
                    </p>
                  </div>
                  <div id="subscribe-msg" />
                </form>
              </div>
            </div> */}
            {/* /.col-md-3 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </footer>
    </div>
  );
}

export default Footer;
