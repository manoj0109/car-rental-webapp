const Contact = () => {
  return (
    <>
      <div>
        <div className="page-heading contact-heading header-text" style={{ backgroundImage: 'url(images/heading-4-1920x500.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-content">
                  <h4>Your Car</h4>
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="find-us">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Our Location on Maps</h2>
                </div>
              </div>
              <div className="col-md-8">
                <div id="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15132.91169847066!2d73.83938222482311!3d18.518599545271993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c079f6b97e25%3A0x2e77dae469b73ff0!2sPune!5e0!3m2!1sen!2sin!4v1656873837115!5m2!1sen!2sin"
                    width="100%" height="330px" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                </div>
              </div>
              <div className="col-md-4">
                <div className="left-content">
                  <h4>About our office</h4>
                  <p style={{ textAlign: 'justify' }}>No more worries about petrol mileage, insurance, and car breakdowns! YourCar has enabled driving convenience for travellers around the country and is fast expanding its reach to cities including Ahmedabad, Bangalore, Chandigarh, Chennai, Coimbatore, Delhi-NCR, Hyderabad, Jaipur, Kochi, Kolkata, Ludhiana, Mangalore, Mumbai, Mysore, Pune, Siliguri and Vizag.
                    Self drive cars from YourCar have given customers more control, privacy, and freedom. Book a self drive car in any city you visit with the YourCar app on your phone and feel at home wherever you go..</p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="send-message">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/*  */}
                <div class="cant_find_us"><div class="fl"><h4 class="heading"> Didn't find what you were looking for?</h4> <span class="size-14 sub-heading"> Get in touch with us. We are here to help you.</span></div> <div class="fr help-page"><section><a href="mailto:help@zoomcar.com" class="help-button"><span class="mdi mdi-mail-ru mobile-icon"></span> <div class="help-button-text"><div><span class="mdi mdi-mail-ru desktop-icon"></span> <strong>
                  Email
                </strong></div> <p>
                    help@yourcar.com
                  </p></div></a> <a href="tel:08068976666" class="help-button"><span class="mdi mdi-phone mobile-icon"></span> <div class="help-button-text"><div><span class="mdi mdi-phone desktop-icon"></span> <strong>
                    Call center number
                  </strong></div> <p>
                      08068976666
                    </p></div></a> </section></div></div>
              </div>
              <div className="col-md-6">
                <img src="/images/h.png" className="img-fluid" alt="Harvey" />
                <h5 className="text-center" style={{ marginTop: 15 }}>Administrator</h5>
              </div>
            </div>
            <br />

          </div>
        </div>
        <div>
          <footer className="f1" >Copyrights 2022: @Manoj Goski</footer>
        </div>
      </div>

    </>
  )
}

export default Contact;