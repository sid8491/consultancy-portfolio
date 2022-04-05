import React from "react";

function About() {
  return (
    <div>
      <div
        style={{ height: "150px", backgroundColor: "#0d2034" }}
      ></div>
      <section className="section-aboutus wrap-blance blancejqurey bg-section2 clearfix">
        <div id="blance1" className="featured-aboutus float-left">
          <img src="images/services/about.jpg" alt="image" />
        </div>
        <div id="" className="info-aboutus float-left">
          <div className="title-section style2 ">
            <h1 className="title">
            <span>Proven</span> methodology, <span>profound </span>impact and<br />
                  <span>sustainable </span>results.
            </h1>
            <div className="sub-title">
              ARS Process Solutions & Consultants Pvt. Ltd., is a company
              established in 2015 serving PAN India, with the experienced
              technical team to serve excellence in the environmental
              consultancy space and believe in pursuing business through{" "}
              <b>TRUST</b>, <b>SUSTAINABLE</b> and <b>INNOVATION</b>.
            </div>
            <div className="sub-title">
              We are committed to helping organizations’ to find best suitable
              talent from the market. Our clientele is spread across the IT,
              Retail, Telecom, FMCG, FMCD, BPO/KPO, E-commerce, Banking, NBFC,
              Manufacturing, Agriculture, Healthcare, Life Sciences, Pharma,
              Hospitality, Gaming, Facility Management and Education sectors and
              so on...
            </div>
          </div>
          {/* <div className="about-counter">
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
          </div> */}
        </div>
      </section>
      {/* <br /> <br /> */}
      <section className="flat-row padingbotom ">
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 history-text">
              <div className="title-section style3 left">
                <h1 className="title">Our MISSION</h1>
              </div>
              <p style={{ fontSize: 20 }} >
                Absolute Resource Solutions (ARS) mission is to provide complete
                workforce solutions across industries and level.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="iconbox iconleft" style={{ marginLeft: 200 }}>
                <div className="box-header">
                  <div className="box-icon">
                    <i
                      className="fa fa-5x fa-trophy"
                      style={{ fontSize: 150 }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 history-text">
              <div className="title-section style3 left">
                <h1 className="title">Our VISION</h1>
              </div>
              <p style={{ fontSize: 20 }}>
                Our vision is to collaborate with customers in providing end to
                end business solutions through specialized across business
                verticals and internalize service quality using innovative
                approaches.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="iconbox iconleft" style={{ marginLeft: 200 }}>
                <div className="box-header">
                  <div className="box-icon">
                    <i
                      className="fa fa-5x fa-bullseye"
                      style={{ fontSize: 150 }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section2 ">
        <div className="container">
          <br />
          <div className="title-section style3 left">
            <h1 className="title">OUR INDUSTRIES</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 flat-icon-left">
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_desktop" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    IT - Software
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_currency" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Banking / Financial Services
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_cogs" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Manufacturing
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_building_alt" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Engineering / Construction
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_clipboard" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Education / Training
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="ti-headphone" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    BPO / Call Center
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="ti-plug" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    IT - Hardware / Networking
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 flat-icon-left">
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="ti-car" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Automobile / Auto Ancillaries
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_phone" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Telecom / ISP
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="ti-heart-broken" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Medical / Healthcare
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_film" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Advertising / MR / PR / Events
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="ti-plug" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Power / Energy
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_house" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Architecture / Interior Design
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="ti-ticket" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Chemical / Plastic / Rubber / Glass
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 flat-icon-left">
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="ti-map-alt" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Hotel / Restaurant
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="ti-printer" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Consumer Durables / Electronics
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="ti-export" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Export-Import / Trading
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="ti-brush-alt" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Paint
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="ti-paint-bucket" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Furnishings / Sanitaryware / Electricals
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="ti-gift" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Gifts / Toys / Stationary
                  </h5>
                </div>
              </div>
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_building" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title" style={{ marginTop: 10 }}>
                    Real Estate
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>

      {/* <section className="flat-row padingbotom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 history-text">
              <div className="title-section style3 left">
                <br />
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
      </section> */}
    </div>
  );
}

export default About;
