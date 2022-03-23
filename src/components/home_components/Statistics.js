import React from "react";

function Statistics() {
  return (
    <div>
      <section className="flat-row background-nopara background-image2 section-counter2">
        <div className="section-overlay style2" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section style2 color-white titlesize48">
                <h1 className="title">
                Pragmatic, Professional, Progressive <br /><span>HR services</span>
                </h1>
                <div className="sub-title style2 linehight30">
                  Our research shows that great leaders prioritise innovation to
                  deliver revenue
                  <br />
                  growth which outperforms their peers
                </div>
              </div>
            </div>
            {/* /.col-md-12 */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-lg-2 col-sm-6">
              <div className="flat-counter style2 padding-another">
                <div className="content-counter">
                  <div
                    className="numb-count"
                    data-to={10}
                    data-speed={2000}
                    data-waypoint-active="yes"
                  >
                    10
                  </div>
                  <div className="name-count">Years of Experience</div>
                </div>
              </div>
              {/* /.flat-counter */}
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="flat-counter style2 before">
                <div className="content-counter">
                  <div
                    className="numb-count"
                    data-to={68}
                    data-speed={2000}
                    data-waypoint-active="yes"
                  >
                    68
                  </div>
                  <div className="name-count">Happy Customers</div>
                </div>
              </div>
              {/* /.flat-counter */}
            </div>
            {/* <div className="col-lg-2 col-sm-6">
              <div className="flat-counter style2">
                <div className="content-counter">
                  <div
                    className="numb-count"
                    data-to={50}
                    data-speed={2000}
                    data-waypoint-active="yes"
                  >
                    50
                  </div>
                  <div className="name-count">Awards Won</div>
                </div>
              </div>
             
            </div> */}
            <div className="col-lg-2 col-sm-6">
              <div className="flat-counter style2 before percent">
                <div className="content-counter">
                  <div
                    className="numb-count"
                    data-to={100}
                    data-speed={2000}
                    data-waypoint-active="yes"
                  >
                    100
                  </div>
                  <div className="name-count">Satisfied Customers</div>
                </div>
              </div>
              {/* /.flat-counter */}
            </div>
          </div>
        </div>
        {/* /.container */}
      </section>
    </div>
  );
}

export default Statistics;
