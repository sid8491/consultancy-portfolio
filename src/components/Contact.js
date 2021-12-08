import React from "react";

function Contact() {
  return (
    <div>
      <div
        style={{ height: "150px", backgroundColor: "rgb(63, 94, 128)" }}
      ></div>
      <section className="flat-row page-contact">
        <div className="container">
          <div className="wrap-formcontact">
            <div className="row">
              <div className="col-lg-5">
                <h1>How can we help you?</h1>
                <div className="list-author">
                  <div className="info-author clearfix">
                    <div className="featured-author float-left">
                      <img src="images/team/c1.jpg" alt="image" />
                    </div>
                    <div className="contact-author">
                      <h3>Archana Chopra</h3>
                      <ul>
                        <li>Director-Fulfillment</li>
                        <li>9899424779</li>
                        <li>achopra@arsps.net</li>
                      </ul>
                    </div>
                  </div>
                  <div className="info-author clearfix">
                    <div className="featured-author float-left">
                      <img src="images/team/c2.jpg" alt="image" />
                    </div>
                    <div className="contact-author">
                      <h3>Deepak Chopra</h3>
                      <ul>
                        <li>Director</li>
                        <li>9811169764</li>
                        <li>dchopra@arsps.net</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="margin-left_12">
                  <form
                    id="contactform"
                    className="contactform style4 clearfix"
                    method="post"
                    action="./contact/contact-process.php"
                    noValidate="novalidate"
                  >
                    <span className="flat-input">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name*"
                        required="required"
                      />
                    </span>
                    <span className="flat-input">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        required="required"
                      />
                    </span>
                    <span className="flat-input">
                      <input
                        name="url"
                        id="url"
                        type="url"
                        placeholder="Website"
                      />
                    </span>
                    <span className="flat-input">
                      <textarea
                        name="message"
                        placeholder="Messages"
                        required="required"
                        defaultValue={""}
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
                        send messages
                      </button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-infobox"></div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-maps box-shadow3 margin-bottom-73">
                <div className="maps2" style={{ width: "100%", height: 520 }} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="info-box text-center">
                <h3>France</h3>
                <ul>
                  <li>John Doe, 123 Main St Chicago, IL 60626</li>
                  <li>Email: info@greenorganic.com</li>
                  <li>Phone: 258-556-189</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-box text-center">
                <h3>United States</h3>
                <ul>
                  <li>John Doe, 123 Main St Chicago, IL 60626</li>
                  <li>Email: info@greenorganic.com</li>
                  <li>Phone: 258-556-189</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-box text-center">
                <h3>Viet Nam</h3>
                <ul>
                  <li>John Doe, 123 Main St Chicago, IL 60626</li>
                  <li>Email: info@greenorganic.com</li>
                  <li>Phone: 258-556-189</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
