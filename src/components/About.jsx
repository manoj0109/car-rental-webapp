function About() {
    return (
        <>
            <div className="page-heading about-heading header-text" style={{ backgroundImage: 'url(images/heading-1-1920x500.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>about us</h4>
                                <h2>YOUR CAR</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-features about-features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>We are providing car on rents</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-image">
                                <img src="images/ab.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-content">
                                <h2>Your Car .</h2>
                                <p style={{ textAlign: 'justify' }}>No more worries about petrol mileage, insurance, and car breakdowns! YourCar has enabled driving convenience for travellers around the country and is fast expanding its reach to cities including Ahmedabad, Bangalore, Chandigarh, Chennai, Coimbatore, Delhi-NCR, Hyderabad, Jaipur, Kochi, Kolkata, Ludhiana, Mangalore, Mumbai, Mysore, Pune, Siliguri and Vizag.
                                    Self drive cars from YourCar have given customers more control, privacy, and freedom. Book a self drive car in any city you visit with the YourCar app on your phone and feel at home wherever you go..</p>

                            </div>
                        </div>
                    </div>
                    <br />

                </div>
            </div>
            <div>
                <footer className="f1" >Copyrights 2022: @Manoj Goski</footer>

            </div>

        </>
    )
}

export default About;