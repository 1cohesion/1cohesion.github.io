import React, { useRef } from "react";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import transition from "../transition";

import "./Contact.css";

const Contact = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <section
        className="contact"
        data-scroll-container
        ref={containerRef}
        id="scroll-container"
      >
        <div className="contact-copy" data-scroll-section>
          <span>Project Inquires</span>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            nam?
          </p>
          <br />
          <a href="mailto: team@1cohesion.com">team@1cohesion.com</a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <span>Networks</span>
          <br />
          <br />
          <a href="https://twitter.com/1cohesion">X</a>
          <br />
          <a href="https://www.instagram.com/1cohesion/">Instagram</a>
          <br />
          <a href="https://www.linkedin.com/company/1cohesion/">LinkedIn</a>
          <br />
          <br />
          <br />
          <span>Our Workplace</span>
          <br />
          <br />
          <p>NYC </p>
          <p>{/* street name */}</p>
          <p>NYC NY</p>
          <br />
          <span id="copyright">
            1cohesion is a creative design lab <br /> NYC, NY © 2023 ALL
            RIGHTS RESERVED.
          </span>
        </div>
      </section>
    </LocomotiveScrollProvider>
  );
};

export default transition(Contact);
