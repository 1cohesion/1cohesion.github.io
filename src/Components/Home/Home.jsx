import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import transition from "../transition";
import HeroImg from "../../assets/hero-img.jpg"
import BannerImg from "../../assets/banner-img.jpg";

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import "./Home.css";

const Home = () => {
  const containerRef = useRef(null);
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours} : ${minutes} : ${seconds}`;
  }

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      }}
      watch={[]}
      containerRef={containerRef}
    >
    <div className="home" data-scroll-container ref={containerRef} id="scroll-container">
      <section className="hero-img" data-scroll-section>
        <div className="hero-img-container">
          <img src={BannerImg} alt="" />
        </div>
        <div className="hero-img-copy">
          <div className="hero-img-copy-h1">
            <h1>1cohesion</h1>
          </div>
        </div>
      </section>
      <section className="projects" data-scroll-section>
        <div className="projects-copy">
        <div className="projects-copy-ws"></div>

          <div className="projects-copy-h1">
            <h1>Accelerating imagination with AI</h1>
          </div>
        </div>
        <div className="projects-list">
          <Link to="/sample-project-page">
            <div className="project">
              <div className="project-img project-img-1"></div>
              <div className="project-name">
                <p>I &#8599;</p>
              </div>
              <div className="project-category">
                <p>ENV</p>
              </div>
            </div>
          </Link>
          <Link to="/sample-project-page">
            <div className="project">
              <div className="project-img project-img-2"></div>
              <div className="project-name">
                <p>II &#8599;</p>
              </div>
              <div className="project-category">
                <p>ART</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="projects-list">
          <Link to="/sample-project-page">
            <div className="project">
              <div className="project-img project-img-3"></div>
              <div className="project-name">
                <p>III &#8599;</p>
              </div>
              <div className="project-category">
                <p>ENTITY</p>
              </div>
            </div>
          </Link>
          <Link to="/sample-project-page">
            <div className="project">
              <div className="project-img project-img-4"></div>
              <div className="project-name">
                <p>IV &#8599;</p>
              </div>
              <div className="project-category">
                <p>SCENE</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="article" data-scroll-section>
        <div className="article-container">
          <div className="article-container-copy">
            <h1>unlock the internal state representation</h1>
          </div>
        </div>
      </section>
      <section className="services" data-scroll-section>
      <div className="services-copy-p"><span>Think bigger</span></div>
        <div className="services-copy-h1"><h1>Why limit yourself from finding a higher representation of your vision</h1></div>
      </section>
      <section className="feature-img" data-scroll-section>
        <div className="feature-img-container">
          <img src={HeroImg} alt="" />
        </div>
      </section>
      <section className="logos" data-scroll-section>
          <Marquee>
            <div className="client-logos">
              <div className="client-logo">
                <p>Logo 1</p>
              </div>
              <div className="client-logo">
                <p>Logo 2</p>
              </div>
              <div className="client-logo">
                <p>Logo 3</p>
              </div>
              <div className="client-logo">
                <p>Logo 4</p>
              </div>
              <div className="client-logo">
                <p>Logo 5</p>
              </div>
              <div className="client-logo">
                <p>Logo 6</p>
              </div>
              <div className="client-logo">
                <p>Logo 7</p>
              </div>
              <div className="client-logo">
                <p>Logo 8</p>
              </div>
            </div>
          </Marquee>
        </section>
      <section className="clients" data-scroll-section>
        <div className="client-copy">
          <div className="client-copy-p">
            <p>OUR CLIENTS</p>
            <br />
            <p>Unreal Engine.</p>
            <br />
            <p>Naughty Dog.</p>
            <br />
            <p>Heart Machine.</p>
          </div>
          <div className="client-copy-p">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eum at. Vel rem, ipsum tenetur rerum doloremque pariatur magnam, quos, quod fugiat quo odit. Quia, pariatur officia. Facilis veniam tempore debitis error totam minima voluptatum distinctio ut et? Similique, soluta!.</p>
            <br />
            <p>Pushing the bounds of whats real.</p>
          </div>
        </div>
      </section>
      <section className="footer" data-scroll-section>
        <div className="footer-copy">
          <div className="footer-copy-h1">
            <a href="mailto: team@1cohesion.com">
              <h1>Contact</h1>
            </a>
          </div>
          <div className="footer-copy-text">
            <p>Creative Design Lab</p>
            <br />
            <p><a href="https://twitter.com/1cohesion">X</a> • <a href="https://www.instagram.com/1cohesion/">Instagram</a> • <a href="https://www.linkedin.com/company/1cohesion/">LinkedIn</a></p>
            <br />
            <p>New York City, USA {time}</p>
          </div>
        </div>
      </section>
    </div>
    </LocomotiveScrollProvider>
  );
};

export default transition(Home);
