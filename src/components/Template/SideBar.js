import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/logo.jpg`} alt="" />
      </Link>
      <header>
        <h2>SADID Machine Learning for social good</h2>
        <p><a href="mailto:pcuriositylab@um6p.ma">pcuriositylab@um6p.ma</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>What, How ?</h2>
      <p>SADID or Social Analytics via Data for Inclusive Development,
        it is an initiative launched by <a href="https://pcl.um6p.ma/">P-Curiosity Lab</a> to tackle scoial and economic challenges.
        We leverage machine learning algorithms to aid policy makers in taking evidence-based
        decisions on Unemployment,
        deforestation, low enrolment rate,transport and all the social problems
        that have negative consequences for large numbers of people.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; SADID-AI <Link to="/">github.com/SADID-ai/webapp</Link>.</p>
    </section>
  </section>
);

export default SideBar;
