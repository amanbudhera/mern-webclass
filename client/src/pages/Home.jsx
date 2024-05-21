import React from 'react'

function Home() {
  return (
    <>
      <section className='section-hero'>
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>Lorem amet adipisicing elit. Atque.</p>
            <h1>Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo labore dolorum omnis. Labore consectetur voluptate odio ex! Architecto non voluptas officia quia! Eum, autem nostrum!</p>
            <div className="btn btn-group">
              <a href="/contact"><button className="btn">Connect now</button></a>
              <a href="/services"><button className="btn secondary-btn">Learn more</button></a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/home.png" alt="img" width="400" height="500" />
          </div>
        </div>
      </section>



      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home