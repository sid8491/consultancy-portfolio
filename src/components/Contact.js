import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xayvebnj", {
    data: {
      subject: "ARS Contact Us",
      pageTitle: function () {
        // This function will be evaluated at submission time
        return document.title;
      },
    },
  });
  if (state.succeeded) {
    return <p>Thanks for contacting!</p>;
  }
  return (
    <div>
      <div style={{ height: "150px", backgroundColor: "#0d2034" }}></div>
      <section className="flat-row page-contact">
        <div className="container">
          <div className="wrap-formcontact">
            <div className="row">
              <div className="col-lg-6">
                <h1>How can we help you?</h1>
                {/* <div className="list-author">
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
                </div> */}
                {/* </div> */}

                <div>
                  <form
                    id="contactform"
                    className="contactform style4 clearfix"
                    action="https://formspree.io/f/xayvebnj"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <span className="flat-input">
                      <ValidationError
                        prefix="name"
                        field="name"
                        errors={state.errors}
                      />
                      <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name*"
                        required="required"
                      />
                    </span>
                    <span className="flat-input">
                      <ValidationError
                        prefix="email"
                        field="email"
                        errors={state.errors}
                      />
                      <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        required="required"
                      />
                    </span>
                    <span className="flat-input">
                      <ValidationError
                        prefix="message"
                        field="message"
                        errors={state.errors}
                      />
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
                        disabled={state.submitting}
                      >
                        send message
                      </button>
                    </span>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                {/* <h1>Internal Hiring for ARS!</h1> */}
                <div className="title-section style2 ">
                  <h1 className="title">
                    Thinking about <br /><span>Suitable Career</span> <br />or <br /><span>Hiring support </span><br />Connect <span> 👉 </span> ARS <span> 👈 </span>
                  </h1>
                </div>
                <div style={{ fontSize: "18px" }}>
                  <p>
                    ARS can help you to find a suitable career as per your
                    skills and capabilities.
                  </p>
                  <p>
                    Interested candidates can send us their resume at:{" "}
                   <span> <b> jobs@arsps.net</b></span> <span style={{fontSize: "30px"}}>📩</span>
                  </p>
                  <br />
                  <p>
                    ARS can help corporates to find out right talent as per
                    corporates needs.
                  </p>
                  <p>
                    To find hiring solutions, drop your queries at:{" "}
                    <b>info@arsps.net </b> <span style={{fontSize: "30px"}}>📩</span>
                  </p>
                  <br />
                  <h4 className="title">
                    <span>Perks:</span>
                  </h4>
                  <ul>
                    <li>Remote work place</li>
                    <li>Best work process</li>
                    <li>Best training process</li>
                    <li>Good environment</li>
                    <li>Lucrative Incentive Structure</li>
                  </ul>
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
                {/* <div className="maps2" style={{ width: "100%", height: 520 }} /> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.927894880628!2d77.09057413719653!3d28.667742945844417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04709a55ca61%3A0x733c78dcf34281ce!2sPaschim%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1639291317381!5m2!1sen!2sin"
                  width="100%"
                  height="520"
                  // style="border:0;"
                  className=" maps2"
                  allowfullscreen=""
                  loading="lazy"
                  data-aos="fade-down"
                  title="map"
                  style={{ width: "100%", height: 520 }}
                ></iframe>

                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.927894880628!2d77.09057413719653!3d28.667742945844417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04709a55ca61%3A0x733c78dcf34281ce!2sPaschim%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1639291317381!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              {/* <div className="info-box text-center">
                <h3>Address</h3>
                <ul>
                  <li>A2B/49A, Paschim Vihar, Delhi</li>
                  <li>Email: info@arsps.net</li>
                  <li>Phone: 011-47019779</li>
                </ul>
              </div> */}
            </div>
            <div className="col-lg-4">
              <div className="info-box text-center">
                <h3>Address</h3>
                <ul>
                  <li style={{ fontSize: "15px" }}>
                    A2B/49A, Paschim Vihar, Delhi
                  </li>
                  <li style={{ fontSize: "15px" }}>Email: info@arsps.net</li>
                  <li style={{ fontSize: "15px" }}>Phone: 011-47019779</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              {/* <div className="info-box text-center">
                <h3>Something 2</h3>
                <ul>
                  <li>011-47019779</li>
                  <li>Email: info@greenorganic.com</li>
                  <li>Phone: 258-556-189</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
