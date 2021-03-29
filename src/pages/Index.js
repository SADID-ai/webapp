import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'Sadid-AI website. Hands-on machine learning apllications for social good, '
    + 'By P-CURIOSITY LAB, Mohammed VI Polytechnic University'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">SADID a cocktail of machine leraning and human centric design</Link></h2>
          <p>
            bridge between stakeholders, data holders and data
            scientists to design solutions for the well-being
            of rural population and drive social and economic development via data
            and machine learning.
          </p>
        </div>
      </header>
      <p> Welcome to SADID machine learning use cases for economic and social development. Please feel free to read more <Link to="/about">about SADID</Link>,
        or you can check also our {' '}
        <Link to="/resume">Ecosystem</Link>, {' '}
        <Link to="/projects">Projects</Link>, {' '}
        view <Link to="/stats">Sadid-ai statistics</Link>, {' '}
        or <Link to="/contact">Contact</Link> us.
      </p>
      <p> Source available <a href="https://github.com/SADID-ai/webapp">here</a>.</p>
    </article>
  </Main>
);

export default Index;
