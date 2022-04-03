import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Apple Inc. had its genesis in the lifelong dream of Stephen G.
              Wozniak to build his own computer—a dream that was made suddenly
              feasible with the arrival in 1975 of the first commercially
              successful microcomputer, the Altair 8800, which came as a kit and
              used the recently invented microprocessor chip. Encouraged by his
              friends at the Homebrew Computer Club, a San Francisco Bay area
              group centred around the Altair, Wozniak quickly came up with a
              plan for his own microcomputer. In 1976, when the Hewlett-Packard
              Company, where Wozniak was an engineering intern, expressed no
              interest in his design, Wozniak, then 26 years old, together with
              a former high-school classmate, 21-year-old Steve Jobs, moved
              production operations to the Jobs family garage. Jobs and Wozniak
              named their company Apple. For working capital, Jobs sold his
              Volkswagen minibus and Wozniak his programmable calculator. Their
              first model was simply a working circuit board, but at Jobs’s
              insistence the 1977 version was a stand-alone machine in a
              custom-molded plastic case, in contrast to the forbidding steel
              boxes of other early machines. This Apple II also offered a colour
              display and other features that made Wozniak’s creation the first
              microcomputer that appealed to the average person.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              {" "}
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              height="500px"
              width="500px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
