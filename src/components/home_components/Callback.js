import React from "react";

function Callback() {
  return (
    <div>
      <section className="section-maps-form style2 parallax parallax4">
        <div className="section-overlay style2" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="formrequest2 style2 padding-right30">
                <div className="divider sh94" />
                <div className="title-section style2 titlesize48 color-white">
                  <h1 className="title">
                    <span>Request</span> a call back.
                  </h1>
                  <div className="sub-title">
                    Whatever specific financial, personal or investment
                    opportunities you’re looking for, be sure that the free
                    consultation with one of our experts will sway you to
                    signup!
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wrap-formrequest padding-lr100">
                <form
                  id="contactform"
                  className="contactform wrap-form style3 clearfix"
                  method="post"
                  action="./contact/contact-process2.php"
                  noValidate="novalidate"
                >
                  <span className="title-form">I would like to discuss:</span>
                  <span className="flat-input flat-select">
                    <select>
                      <option value>How can we help:*</option>
                      <option value>How can we help:*</option>
                      <option value>How can we help:*</option>
                    </select>
                  </span>
                  <span className="flat-input">
                    <input
                      name="name"
                      type="text"
                      defaultValue
                      placeholder="Your Name:*"
                      required="required"
                    />
                  </span>
                  <span className="flat-input">
                    <input
                      name="phone"
                      type="text"
                      defaultValue
                      placeholder="Phone Number:*"
                      required="required"
                    />
                  </span>
                  <span className="flat-input">
                    <button
                      name="submit"
                      type="submit"
                      className="flat-button"
                      id="submit"
                      title="Submit now"
                    >
                      SUBMIT
                      <i className="fa fa-angle-double-right" />
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Callback;
