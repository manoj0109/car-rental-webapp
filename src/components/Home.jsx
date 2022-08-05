const Home = () => {
  return (
    <>
      <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleCaptions" data-slide-to={1} />
            <li data-target="#carouselExampleCaptions" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img style={{ height: "600px" }} src={process.env.PUBLIC_URL + '../images/slider-image-1-1920x6002.jpg'} className="d-block w-100" alt="Slides" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Find your car today!</h5>
                <h4>Book the best car for you</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img style={{ height: "600px" }} src={process.env.PUBLIC_URL + '../images/side-bar-tata-group.png'} className="d-block w-100" alt="Slides" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Find the best variant</h5>
                <h4>A lot of variants available</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img style={{ height: "600px" }} src={process.env.PUBLIC_URL + '../images/slider-image-3-1920x600.jpg'} className="d-block w-100" alt="Slides" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Best Services</h5>
                <h4>Full Functional Feedback System</h4>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev bg-transparent border-0" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next bg-transparent border-0" type="button" data-target="#carouselExampleCaptions" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </button>
        </div>


        <div className="latest-products">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Offers</h2>
                  <a href="offers.html">view more <i className="fa fa-angle-right" /></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-item">
                  <a href="offers.html"><img src="images/Cars3.png" alt="RR_Image" /></a>
                  <div className="down-content">
                    <a href="offers.html"><h4>Rolls Royce</h4></a>
                    <h6><small>from</small> ₹15,000 <small>per weekend</small></h6>
                    <h4>Rolls-Royce was a British luxury car and later an aero-engine manufacturing business established in 1904 in Manchester, United Kingdom by the partnership of Charles Rolls and Henry Royce.</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-item">
                  <a href="offers.html"><img src="images/car2.png" alt="AIMG" /></a>
                  <div className="down-content">
                    <a href="offers.html"><h4>Audi A6 </h4></a>
                    <h6><small>from</small> ₹8,000 <small>per weekend</small></h6>
                    <h4>Audi AG, commonly referred to as Audi, is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company, the Volkswagen Group.</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-item">
                  <a href="offers.html"><img src="images/2.png" alt="LL_img" /></a>
                  <div className="down-content">
                    <a href="offers.html"><h4>Land Rover Range Rover Evoque</h4></a>
                    <h6><small>from</small> ₹10,000 <small>per weekend</small></h6>
                    <h4>Land Rover is a British brand of predominantly four-wheel drive, off-road capable vehicles, owned by multinational car manufacturer Jaguar Land Rover, since 2008 a subsidiary of India's Tata Motors.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <footer className="f1" >Copyrights 2022: @Manoj Goski</footer>

        </div>
      </div>

    </>
  )
}

export default Home;