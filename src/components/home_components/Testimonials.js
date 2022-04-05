import React from "react";

function Testimonials() {
  return (
    <div>
      <section className="flat-row section-testimonials2 padding3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-section text-center">
                <div className="symbol">​‌“</div>
                <h1 className="cd-headline clip is-full-width">
                  {/* <span>Testimonials</span> */}
                  {/* <span className="cd-words-wrapper">
                    <b className="is-visible"> Happy Client</b>
                    <b>Believe Client</b>
                    <b>Choice Client</b>
                  </span> */}
                </h1>
              </div>
            </div>
            <div className="col-md-12">
              <div className="wrap-testimonial padding-lr79">
                <div id="testimonial-slider">
                  <ul className="slides">
                    <li>
                      <div className="testimonials style3 text-center">
                        <div className="message">
                          <blockquote className="whisper">
                            "We were in a rapid growth phase in our company and
                            needed to hire rapidly but control costs.Over the
                            years I have consistently received high caliber
                            candidates that are not only skilled, but also a
                            cultural fit. ARS is one of the best and most
                            trustworthy search agencies I have worked with.One
                            of ARS strengths was building strong relationships
                            with their candidates and with their clients. I
                            would highly recommend ARS."
                          </blockquote>
                        </div>
                        <div className="avatar">
                          <span className="name">
                            Rahul Saxena
                            <br />
                            Iris
                          </span>
                          <br />
                          <div className="start">
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                          </div>
                          <span className="position">
                            Senior Talent Acquisition Specialist
                          </span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="testimonials style3 text-center">
                        <div className="message">
                          <blockquote className="whisper">
                            "Our Association with ARS goes back more than a year
                            and a half. The core strength of this sustained
                            relationship, has been ARS’s ability to gain
                            contextual insights at the business level at Bizloan
                            Pvt Ltd and provide the best Talent fit across
                            varied and diverse requirements"
                          </blockquote>
                        </div>
                        <div className="avatar">
                          <span className="name">
                            Amal Govil
                            <br />
                            Biz Loan
                          </span>
                          <br />
                          <div className="start">
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                          </div>
                          <span className="position">
                            SVP - HR & Administration
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="testimonials style3 text-center">
                        <div className="message">
                          <blockquote className="whisper">
                            "I have employed many candidates through ARS. They
                            are very detail oriented and I appreciate their
                            commitment towards the work and TAT. They ensure
                            that the candidate sourcing process is a smooth
                            experience for the organization as well as the
                            candidates. Appreciate the effort that each of their
                            recruiters put in. A very good experience overall."
                          </blockquote>
                        </div>
                        <div className="avatar">
                          <span className="name">
                            Srijata Ghosal
                            <br />
                            Indusind Bank
                          </span>
                          <br />
                          <div className="start">
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                          </div>
                          <span className="position">
                            Regional Resource Manager - South 1
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="testimonial-carousel">
                  <ul className="slides clearfix">
                    <li>
                      <img alt="image" src="images/testimonial/1.jpg" />
                    </li>
                    <li>
                      <img alt="image" src="images/testimonial/2.jpg" />
                    </li>
                    <li>
                      <img alt="image" src="images/testimonial/3.jpg" />
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.wrap-testimonial */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
