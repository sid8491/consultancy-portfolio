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
                  <span>2000+</span>
                  <span className="cd-words-wrapper">
                    <b className="is-visible"> Happy Client</b>
                    <b>Believe Client</b>
                    <b>Choice Client</b>
                  </span>
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
                            "We love the approachable format, and the fact that
                            they chose to feature customers that users can
                            really relate to.Each client story module links to
                            the client's website, Facebook page, and app in both
                            the Android and Apple app stores and sets people up
                            for success."
                          </blockquote>
                        </div>
                        <div className="avatar">
                          <span className="name">Shaya Hill</span>
                          <br />
                          <div className="start">
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                          </div>
                          <span className="position">Tax Advice</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="testimonials style3 text-center">
                        <div className="message">
                          <blockquote className="whisper">
                            " We worked with Consuloan. Our representative was
                            very knowledgeable and helpful. Consuloan made a
                            number of suggestions to help improve our systems.
                            Consuloan explained how things work and why it would
                            help. We are pleased with the result and we
                            definitely highly recommend Consuloan."
                          </blockquote>
                        </div>
                        <div className="avatar">
                          <span className="name">Alex Poole</span>
                          <br />
                          <div className="start">
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                          </div>
                          <span className="position">CEO DeerCreative</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="testimonials style3 text-center">
                        <div className="message">
                          <blockquote className="whisper">
                            " Even though I am a seasoned business owner myself,
                            I am sure that there’s always room for growth,
                            inspiration, and new ideas.It's has provided a
                            common language that is gaining popularity in the
                            workplace as it creates new learning and sets people
                            up for success."
                          </blockquote>
                        </div>
                        <div className="avatar">
                          <span className="name">Anthony Jones</span>
                          <br />
                          <div className="start">
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                            <i className="fa fa-star" /> &nbsp;
                          </div>
                          <span className="position">Business Planner</span>
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
