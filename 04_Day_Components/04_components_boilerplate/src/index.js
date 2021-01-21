import React from 'react';
import ReactDOM from 'react-dom';

import htmlLogoImage from './images/html_logo.png'
import cssLogoImage from './images/css_logo.png'
import jsLogoImage from './images/javascript_logo.png'
import reactLogoImage from './images/react_logo.png'
import meImage from './images/MeQMRiverside19-square.jpg'

import './index.scss'

const HTMLLogo = () => {
  return (<img
    src={htmlLogoImage}
    alt="html5-logo"
    className="logo"
  />)
}

const CSSLogo = () => {
  return (<img
    src={cssLogoImage}
    alt="css3-logo"
    className="logo"
  />)
}

const JSLogo = () => {
  return (<img
    src={jsLogoImage}
    alt="js-logo"
    className="logo"
  />)
}

const ReactLogo = () => {
  return (<img
    src={reactLogoImage}
    alt="react-logo"
    className="logo"
  />)
}

const Logos = () => {
  return (<div className="logo-container">
    <HTMLLogo/>
    <CSSLogo/>
    <JSLogo/>
    <ReactLogo/>
  </div>)
}

const FrontEndTechnologies = () => {
  return (
    <div className="front-end-tech">
      <b className="title">Front End Technologies</b>
      <Logos/>
    </div>
  )
}

const SignUp = () => {
  return (<div>
    <input id="first-name" placeholder="First Name" className="signup"/>
    <input id="last-name" placeholder="Last Name" className="signup"/>
    <input id="email" placeholder="Email" className="signup"/>
  </div>)
}

const SubscribeForm = () => {
  return (
    <div className="subscribe-form-wrapper">
      <div className="subscribe-form">
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to receive news and updates.</p>
        <SignUp/>
        <button className="subscribe">Subscribe</button>
      </div>
    </div>
  )
}

const Skills = () => {
  return (<div className="skills-container">
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
}

const VerifiedTick = () => {
  return(<svg viewBox="0 0 100 100" width="14" height="14">
      <circle cx="50" cy="50" r="40" stroke="#2ACFCF" strokeWidth="4" fill="#2ACFCF"/>
      <polygon points="45,75 80,40 70,30 35,65" fill="white"/>
      <polygon points="35,65 25,55 35,45 45,55" fill="white"/>
    </svg>
  )
}

const PersonalTechProfile = () => {
  return (
    <div className="personal-tech-profile-wrapper">
      <div className="personal-tech-profile">
        <img src={meImage} alt="me" className="me-pic"/>
        <h3>DAVID FITZGERALD <VerifiedTick/></h3>
        <p>Junior Developer, England</p>
        <h4>SKILLS</h4>
        <Skills/>
        <p>Created on Jan 18, 2021</p>
      </div>
    </div>
  )
}

function randomHex () {
  let hexString = "#"
  for (let i=0; i<6; i++) {
    hexString += Math.floor(Math.random() * 16).toString(16)
  }
  return hexString
}

const HexBar = () => {
  const hexString = randomHex();
  const style = {
    backgroundColor: hexString
  }
  return (
    <div className="hex-bar" style={style}>
      {randomHex()}
    </div>
  )
}

const HexBars = ({amount}) => {
  return <div>{Array(amount).fill(<HexBar/>)}</div>
}

const App = () => {
  return (
    <div>
      <PersonalTechProfile/>
      <FrontEndTechnologies/>
      <HexBar/>
      <HexBars amount={5}/>
      <SubscribeForm/>
    </div>
  )
}

// Render
const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement);

