import React from "react";

function Banner() {
  return (
    <div id="theme-main-banner" className="banner-one section-spacing">
      <div data-src="assets/images/home/slide-1.jpg">
        <div className="camera_caption text-center">
          <div className="container">
            <h1 className="wow fadeInUp animated">
              <span>Business for</span> Consuling &amp; Investment
            </h1>
            <p className="wow fadeInUp animated" data-wow-delay="0.2s">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate
            </p>
            <a
              href="about.html"
              className="theme-button-one wow fadeInUp animated"
              data-wow-delay="0.278s"
            >
              Read more
            </a>
          </div>{" "}
          {/* /.container */}
        </div>{" "}
        {/* /.camera_caption */}
      </div>
      <div data-src="assets/images/home/slide-2.jpg">
        <div className="camera_caption text-center">
          <div className="container">
            <h1 className="wow fadeInUp animated">
              <span>We are Apache We are Future</span> Coworking &amp; Community
            </h1>
            <p className="wow fadeInUp animated" data-wow-delay="0.2s">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas. Dynamically innovate
            </p>
            <a
              href="about.html"
              className="theme-button-one wow fadeInUp animated"
              data-wow-delay="0.278s"
            >
              Read more
            </a>
          </div>{" "}
          {/* /.container */}
        </div>{" "}
        {/* /.camera_caption */}
      </div>
    </div>
  );
}

export default Banner;
