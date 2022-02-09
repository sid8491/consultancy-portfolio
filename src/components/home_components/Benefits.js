import React from "react";

function Benefits() {
  return (
    <div>
      <section>
        <div className="container">
          <ul
            id="data-effect"
            className="data-effect wrap-iconbox margin-top_81 clearfix"
          >
            <li>
              <div className="iconbox effect bg-image text-center">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_globe" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title">Staffing / Hiring Solutions</h5>
                  <p>
                    We help provide qualified and trained resources ready to be
                    onboarded, reducing the time taken to hire and loss of
                    productivity and thereby saving money.
                  </p>
                </div>
                <div className="effecthover">
                  <img src="images/imagebox/1.jpg" alt="image" />
                </div>
              </div>
            </li>
            <li>
              <div className="iconbox effect bg-image text-center">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_search-2" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title">Recruitment Process Outsourcing</h5>
                  <p>
                    RPO is a form of business process outsourcing (BPO) where an
                    employer transfers all or part of its recruitment processes
                    to an external service provider.
                  </p>
                </div>
                <div className="effecthover">
                  <img src="images/imagebox/1.jpg" alt="image" />
                </div>
              </div>
            </li>
            <li>
              <div className="iconbox effect bg-image text-center">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_cogs" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title">
                    Career Transition / Outplacement
                  </h5>
                  <p>
                    A service provided to a departing employee to assist with an
                    effective and smooth transition to a new opportunity, or
                    even retirement.
                  </p>
                </div>
                <div className="effecthover">
                  <img src="images/imagebox/1.jpg" alt="image" />
                </div>
              </div>
            </li>
          </ul>
          <div className="divider sh26" />
          <div className="row">
            <div className="col-lg-4 flat-icon-left">
              <div className="divider sh35" />
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_currency" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title">Market Intelligence</h5>
                  <p>
                    We enable organizations to take informed talent decisions.
                    Offerings include Talent Mapping, Compensation Surveys &
                    Independent Reference Checks.
                  </p>
                </div>
              </div>
              {/* <div className="divider sh5" /> */}
              {/* <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_building" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title">People Analytics Solutions</h5>
                  <p>
                    People analytics is the practice of collecting and applying
                    organizational, people, and talent data to improve critical
                    business outcomes.
                  </p>
                </div>
              </div> */}
            </div>
            <div className="col-lg-4">
              <div className="featured-iconbox">
                <img src="images/imagebox/f1.jpg" alt="image" />
              </div>
            </div>
            <div className="col-lg-4 flat-icon-right">
              <div className="divider sh35" />
              <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_piechart" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title">People Analytics Solutions</h5>
                  <p>
                    People analytics is the practice of collecting and applying
                    organizational, people, and talent data to improve critical
                    business outcomes.
                  </p>
                </div>
              </div>
              {/* <div className="divider sh5" /> */}
              {/* <div className="iconbox iconleft">
                <div className="box-header">
                  <div className="box-icon">
                    <i className="icon_creditcard" />
                  </div>
                </div>
                <div className="box-content">
                  <h5 className="box-title">Industry Mapping</h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusan doloremque laudantium
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Benefits;
