import React from "react";

function About() {
  return (
    <div>
      <div
        style={{ height: "150px", backgroundColor: "rgb(63, 94, 128)" }}
      ></div>
      <section className="section-aboutus wrap-blance blancejqurey bg-section2 clearfix">
        <div id="blance1" className="featured-aboutus float-left">
          <img src="images/services/about.jpg" alt="image" />
        </div>
        <div id="blance2" className="info-aboutus float-left">
          <div className="title-section style2 ">
            <h1 className="title">
              <span>We advise</span> you, you call the right decision!
            </h1>
            <div className="sub-title">
              ARS Process Solutions &amp; Consultants Pvt. Ltd., is a company
              established in 2015 serving PAN India, with the experienced
              technical team to serve excellence in the environmental
              consultancy space and believe in pursuing business through{" "}
              <b>TRUST</b>,<b>SUSTAINABLE</b> and <b>INNOVATION</b>.
            </div>
            <div>
              We are committed to helping organizations’ to find best suitable
              talent from the market. Our clientele is spread across the IT,
              Retail, Telecom, FMCG, FMCD, BPO/KPO, E-commerce, Banking, NBFC,
              Manufacturing, Agriculture, Healthcare, Life Sciences, Pharma,
              Hospitality, Gaming, Facility Management and Education sectors and
              so on...
            </div>
          </div>
          <div className="about-counter">
            <div className="flat-counter float-left color-another text-center">
              <div className="content-counter float-left">
                <div className="icon-count">
                  <i className="ti-headphone-alt" />
                </div>
                <div
                  className="numb-count"
                  data-to={120}
                  data-speed={2000}
                  data-waypoint-active="yes"
                >
                  120
                </div>
                <div className="name-count">Consultants</div>
              </div>
            </div>
            {/* /.flat-counter */}
            <div className="flat-counter color-another float-left text-center">
              <div className="content-counter float-left">
                <div className="icon-count">
                  <i className="ti-bookmark-alt" />
                </div>
                <div
                  className="numb-count"
                  data-to={50}
                  data-speed={2000}
                  data-waypoint-active="yes"
                >
                  50
                </div>
                <div className="name-count">Awards Winning</div>
              </div>
            </div>
            {/* /.flat-counter */}
            <div className="flat-counter color-another float-left text-center">
              <div className="content-counter">
                <div className="icon-count">
                  <i className="ti-face-smile" />
                </div>
                <div
                  className="numb-count"
                  data-to={240}
                  data-speed={2000}
                  data-waypoint-active="yes"
                >
                  240
                </div>
                <div className="name-count">Satisfied Customers</div>
              </div>
            </div>
            {/* /.flat-counter */}
          </div>
        </div>
      </section>
      {/* <br /> <br /> */}
      <section className="flat-row padingbotom bg-section2">
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 history-text">
              <div className="title-section style3 left">
                <h1 className="title">Our MISSION</h1>
              </div>
              <p>
                Absolute Resource Solutions (ARS) mission is to provide complete
                workforce solutions across industries and level.
              </p>
              <br />
              <div className="title-section style3 left">
                <h1 className="title">Our VISION</h1>
              </div>
              <p>
                Our vision is to collaborate with customers in providing end to
                end business solutions through specialized across business
                verticals and internalize service quality using innovative
                approaches.
              </p>
            </div>

            <div className="col-lg-6">
              <h3>INDUSTRIES</h3>
              <div className="main-history">
                <div className="wrap-step clearfix">
              
                  <div className=" data-step float-left">
                    {/* <span className="year">1990</span> */}
                  </div>
                  <div className=" info-step float-left">
                    <h5>IT PRODUCT AND SERVICES</h5>
                    <p>
                      nother family member reinforced the younger man’s
                      inter-est in the field. Joe’s uncle was an architect and a
                      general contractor and encouraged Joe.
                    </p>
                  </div>
                </div>
                <div className="wrap-step clearfix">
                  <div className=" data-step float-left">
                    {/* <span className="year">2010</span> */}
                  </div>
                  <div className=" info-step float-left">
                    <h5>ENGINEERING</h5>
                    <p>
                      nother family member reinforced the younger man’s
                      inter-est in the field. Joe’s uncle was an architect and a
                      general contractor and encouraged Joe.
                    </p>
                  </div>
                </div>
                <div className="wrap-step clearfix">
                  <div className=" data-step float-left">
                    {/* <span className="year">2015</span> */}
                  </div>
                  <div className=" info-step float-left">
                    <h5>CONSUMERS</h5>
                    <p>
                      nother family member reinforced the younger man’s
                      inter-est in the field. Joe’s uncle was an architect and a
                      general contractor and encouraged Joe.
                    </p>
                  </div>
                </div>
                <div className="wrap-step clearfix">
                  <div className=" data-step float-left">
                    {/* <span className="year">2017</span> */}
                  </div>
                  <div className=" info-step float-left">
                    <h5>PHARMA AND HEALTHCARE</h5>
                    <p>
                      nother family member reinforced the younger man’s
                      inter-est in the field. Joe’s uncle was an architect and a
                      general contractor and encouraged Joe.
                    </p>
                  </div>
                </div>
                <div className="wrap-step clearfix">
                  <div className=" data-step float-left">
                    {/* <span className="year">2017</span> */}
                  </div>
                  <div className=" info-step float-left">
                    <h5>SERVICE SECTOR</h5>
                    <p>
                      nother family member reinforced the younger man’s
                      inter-est in the field. Joe’s uncle was an architect and a
                      general contractor and encouraged Joe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flat-row  page-teammember">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section style3 text-center">
                <h1 className="title">Meet Our Team</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="flat-team">
                <div className="avatar">
                  <img src="images/team/1.jpg" alt="image" />
                </div>
                <div className="content text-center">
                  <h5 className="name">Ajay</h5>
                  <p className="position">Consultant</p>
                  <ul className="social-links style2 team">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="flat-team">
                <div className="avatar">
                  <img src="images/team/2.jpg" alt="image" />
                </div>
                <div className="content text-center">
                  <h5 className="name">Vijay</h5>
                  <p className="position">Consultant</p>
                  <ul className="social-links style2 team">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="flat-team">
                <div className="avatar">
                  <img src="images/team/3.jpg" alt="image" />
                </div>
                <div className="content text-center">
                  <h5 className="name">Seeta</h5>
                  <p className="position">Consultant</p>
                  <ul className="social-links style2 team">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="flat-team">
                <div className="avatar">
                  <img src="images/team/4.jpg" alt="image" />
                </div>
                <div className="content text-center">
                  <h5 className="name">Geeta</h5>
                  <p className="position">Consultant</p>
                  <ul className="social-links style2 team">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="flat-team">
                <div className="avatar">
                  <img src="images/team/5.jpg" alt="image" />
                </div>
                <div className="content text-center">
                  <h5 className="name">Ramesh</h5>
                  <p className="position">Consultant</p>
                  <ul className="social-links style2 team">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="flat-team">
                <div className="avatar">
                  <img src="images/team/6.jpg" alt="image" />
                </div>
                <div className="content text-center">
                  <h5 className="name">Suresh</h5>
                  <p className="position">Consultant</p>
                  <ul className="social-links style2 team">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="flat-team">
                <div className="avatar">
                  <img src="images/team/7.jpg" alt="image" />
                </div>
                <div className="content text-center">
                  <h5 className="name">Tango</h5>
                  <p className="position">Consultant</p>
                  <ul className="social-links style2 team">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="flat-team">
                <div className="avatar">
                  <img src="images/team/8.jpg" alt="image" />
                </div>
                <div className="content text-center">
                  <h5 className="name">Charly</h5>
                  <p className="position">Consultant</p>
                  <ul className="social-links style2 team">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flat-row padingbotom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 history-text">
              <div className="title-section style3 left">
                <h1 className="title">Our History</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nos-trud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consec-tetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in vo-luptate velit esse
                cillum dolore eu fugiat nulla pariatur.Excepteur sint
                occaecat.-Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              {/* <a href="#" className="flat-button style2">
                Read more
              </a> */}
            </div>
            <div className="col-lg-6">
              <div className="main-history">
                <div className="wrap-step clearfix">
                  <div className=" data-step float-left">
                    <span className="year">1990</span>
                  </div>
                  <div className=" info-step float-left">
                    <h5>Entrepreneurship Hall of Fame</h5>
                    <p>
                      nother family member reinforced the younger man’s
                      inter-est in the field. Joe’s uncle was an architect and a
                      general contractor and encouraged Joe.
                    </p>
                  </div>
                </div>
                <div className="wrap-step clearfix">
                  <div className=" data-step float-left">
                    <span className="year">2010</span>
                  </div>
                  <div className=" info-step float-left">
                    <h5>Entrepreneurship Hall of Fame</h5>
                    <p>
                      nother family member reinforced the younger man’s
                      inter-est in the field. Joe’s uncle was an architect and a
                      general contractor and encouraged Joe.
                    </p>
                  </div>
                </div>
                <div className="wrap-step clearfix">
                  <div className=" data-step float-left">
                    <span className="year">2015</span>
                  </div>
                  <div className=" info-step float-left">
                    <h5>Entrepreneurship Hall of Fame</h5>
                    <p>
                      nother family member reinforced the younger man’s
                      inter-est in the field. Joe’s uncle was an architect and a
                      general contractor and encouraged Joe.
                    </p>
                  </div>
                </div>
                <div className="wrap-step clearfix">
                  <div className=" data-step float-left">
                    <span className="year">2017</span>
                  </div>
                  <div className=" info-step float-left">
                    <h5>Entrepreneurship Hall of Fame</h5>
                    <p>
                      nother family member reinforced the younger man’s
                      inter-est in the field. Joe’s uncle was an architect and a
                      general contractor and encouraged Joe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
