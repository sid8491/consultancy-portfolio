import React from "react";

function Contact() {
  const [state, handleSubmit] = useForm("xayvebnj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
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
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <span className="flat-input">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name*"
                        required="required"
                      />
                      <ValidationError
                        prefix="name"
                        field="name"
                        errors={state.errors}
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
                      <ValidationError
                        prefix="email"
                        field="email"
                        errors={state.errors}
                      />
                    </span>
                    <span className="flat-input">
                      <textarea
                        name="message"
                        placeholder="Messages"
                        required="required"
                        defaultValue={""}
                      />
                      <ValidationError
                        prefix="message"
                        field="message"
                        errors={state.errors}
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
              <div className="info-box text-center">
                <h3>Address</h3>
                <ul>
                  <li>A2B/49A, Paschim Vihar, Delhi</li>
                  <li>Email: info@arsps.net</li>
                  <li>Phone: 001-1234-56789</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-box text-center">
                <h3>Something 1</h3>
                <ul>
                  <li>Line 1</li>
                  <li>Email: inf o@greenorganic.com</li>
                  <li>Phone: 258-556-189</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-box text-center">
                <h3>Something 2</h3>
                <ul>
                  <li>001-1234-56789</li>
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
