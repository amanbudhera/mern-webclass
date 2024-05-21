import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <section className='section-hero'>
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>Welcome to WebClass</p>
            <h1>Why Chose Us?</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, eius laboriosam Autem sunt sequi ipsa.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, eius laboriosam Autem sunt sequi ipsa.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, eius laboriosam Autem sunt sequi ipsa.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, eius laboriosam Autem sunt sequi ipsa.
            </p>
            <div className="btn btn-group">
              <NavLink to="/contact"><button className="btn">Connect now</button></NavLink>
              <NavLink to="/services"><button className="btn secondary-btn">Learn more</button></NavLink>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/about.png" alt="img" width="400" height="500" />
          </div>
        </div>
      </section>
  )
}

export default About