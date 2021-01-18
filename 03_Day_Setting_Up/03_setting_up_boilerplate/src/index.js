import React from 'react';
import ReactDOM from 'react-dom';

import htmlLogoImage from './images/html_logo.png'
import cssLogoImage from './images/css_logo.png'
import jsLogoImage from './images/javascript_logo.png'
import reactLogoImage from './images/react_logo.png'
import meImage from './images/MeQMRiverside19-square.jpg'

import './index.scss'

// Exercise 2a
const htmlLogo = (<img
  src={htmlLogoImage}
  alt="html5-logo"
  className="logo"
/>)

const cssLogo = (<img
  src={cssLogoImage}
  alt="css3-logo"
  className="logo"
/>)

const jsLogo = (<img
  src={jsLogoImage}
  alt="js-logo"
  className="logo"
/>)

const reactLogo = (<img
  src={reactLogoImage}
  alt="react-logo"
  className="logo"
/>)

const logos = (<div className="logo-container">
  {htmlLogo}
  {cssLogo}
  {jsLogo}
  {reactLogo}
</div>)

const exercise2a = (
  <div className="front-end-tech">
    <b className="title">Front End Technologies</b>
    {logos}
  </div>
)

// Exercise 2b
const signup = (<div>
  <input id="first-name" placeholder="First Name" className="signup"/>
  <input id="last-name" placeholder="Last Name" className="signup"/>
  <input id="email" placeholder="Email" className="signup"/>
</div>)

const exercise2b = (
  <div className="subscribe-form-wrapper">
    <div className="subscribe-form">
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      {signup}
      <button className="subscribe">Subscribe</button>
    </div>
  </div>
)

const skills = (
  <div className="skills-container">
    <div>HTML</div>
    <div>CSS</div>
    <div>Javascript</div>
    <div>React</div>
    <div>Python</div>
    <div>AWS</div>
    <div>Ruby</div>
    <div>Rails</div>
    <div>Jenkins</div>
    <div>Linux</div>
    <div>Shell Scripting</div>
    <div>Networking</div>
    <div>MySQL</div>
    <div>Git</div>
  </div>
)

const tick = (
  <svg viewBox="0 0 100 100" width="14" height="14">
    <circle cx="50" cy="50" r="40" stroke="#2ACFCF" strokeWidth="4" fill="#2ACFCF"/>
    <polygon points="45,75 80,40 70,30 35,65" fill="white"/>
    <polygon points="35,65 25,55 35,45 45,55" fill="white"/>
  </svg>
)

// Exercise 3
const exercise3 = (
  <div className="personal-tech-profile-wrapper">
    <div className="personal-tech-profile">
      <img src={meImage} alt="me" className="me-pic"/>
      <h3>DAVID FITZGERALD {tick}</h3>
      <p>Junior Developer, England</p>
      <h4>SKILLS</h4>
      {skills}
      <p>Created on Jan 18, 2021</p>
    </div>
  </div>
)

const App = (
  <div>
    {exercise3}
    {exercise2a}
    {exercise2b}
  </div>
)


// Render
const rootElement = document.getElementById('root')
ReactDOM.render(App, rootElement);

